const Income = require("../models/Income");
const Expanse = require("../models/Expanse");
const { isValidObjectId } = require("mongoose");

// Dashboard Data
exports.getDashboardData = async (req, res) => {
  try {
    const userId = req.user._id;

    // Fetch total income & Expanse
    const totalIncome = await Income.aggregate([
      { $match: { userId: userId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const totalExpense = await Expanse.aggregate([
      { $match: { userId: userId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const last60DaysIncomeTransactions = await Income.find({
      userId,
      date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) },
    }).sort({ date: -1 });

    // Get total income in last 60 days
    const incomeLast60Days = last60DaysIncomeTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0,
    );

    // Get total transactions in last 30 days
    const last30DaysExpanseTransactions = await Expanse.find({
      userId,
      date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
    }).sort({ date: -1 });

    const expanseLast30Days = last30DaysExpanseTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0,
    );

    // Fetch last 5 income & expanse transactions
    const lastTimeTransaction = [
      ...(await Income.find({ userId }).sort({ date: -1 }).limit(5)).map(
        (txn) => ({ ...txn.toObject(), type: "income" }),
      ),
      ...(await Expanse.find({ userId }).sort({ date: -1 }).limit(5)).map(
        (txn) => ({ ...txn.toObject(), type: "expense" }),
      ),
    ].sort((a, b) => b.date - a.date);

    // Final response

    res.json({
      totalBalance:
        (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0),
      totalIncome: totalIncome[0]?.total || 0,
      totalExpense: totalExpense[0]?.total || 0,
      last30DaysExpenses: {
        total: expanseLast30Days,
        transactions: last30DaysExpanseTransactions,
      },
      last60DaysIncome: {
        total: incomeLast60Days,
        transactions: last60DaysIncomeTransactions,
      },
      lastTimeTransaction: lastTimeTransaction,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

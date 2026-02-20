
const xlsx = require('xlsx');
const Expanse = require("../models/Expanse");

// Add Expanse Source
exports.addExpanse = async (req,res) => {
    const userId = req.user.id;
    try {
        const {icon, category, amount, date} = req.body || {}
        // Validate fields 
        if(!category || !amount || !date){
            return res.status(400).json({
                message:"All Fields are required"
            });
        }
        
        const newExpanse = new Expanse({
            userId,
            icon,
            category,
            amount,
            date: new Date(date)
        });

        await newExpanse.save();
        res.status(200).json(newExpanse);
    } catch (err) {
        res.status(500).json({
            message:"Server Error"
        });
    }
}


// Get All Expanse Source
exports.getAllExpanse = async (req,res) => {
    const userId = req.user.id;

    try {
        const expanse = await Expanse.find({userId}).sort({date: -1 });
        res.json(expanse);
    } catch (err) {
        res.status(500).json({
            message:"Server Error"
        });
    }
}

// Delete Expanse Source
exports.deleteExpanse = async (req,res) => {
    try {
        await Expanse.findByIdAndDelete(req.params.id);
        res.json({
            message:"Expanse deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            message:"Server Error"
        });
    }
}

// Download Expanse Excel Source
exports.downloadExpanseExcel = async (req,res) => {
    const userId = req.user.id;
    try {
        const expanse = await Expanse.find({userId}).sort({ date: -1});

        //Prepare data for excel
        const data = expanse.map((item) =>({
            Category: item.category,
            Amount: item.amount,
            Date: item.date
        }));
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Expanse");
        xlsx.writeFile(wb, 'expanse_details.xlsx');
        res.download('expanse_details.xlsx');
    } catch (err) {
         res.status(500).json({
            message:"Server Error"
        });
    }
}
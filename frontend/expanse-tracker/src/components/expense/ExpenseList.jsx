import TransactionsInfoCard from "../Cards/TransactionsInfoCard";
import { LuDownload } from "react-icons/lu"; 
import moment from 'moment';
const ExpenseList = ({transactions, onDelete, onDownload}) => {
  return (
   <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Expense Category</h5>
        <button className="card-btn" onClick={onDownload}>
          <LuDownload className="text-base"></LuDownload> Download
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {transactions?.map((item) => (
            <TransactionsInfoCard
                key={item._id}
                title={item.category}
                icon={item.icon}
                date={moment(item.date).format("Do MMM YYYY")}
                amount={item.amount}
                type="expense"
                onDelete={() => onDelete(item._id)}
            >
            </TransactionsInfoCard>
        ))}
      </div>
    </div>
  )
}
export default ExpenseList
import { useEffect, useState } from "react"
import { prepareExpenseBarChartData } from "../../utils/helper";
import CustomBarChart from "../Charts/CustomBarChart";

const Last30DaysExpenses = ({data}) => {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(data); 
    setChartData(result);
    
    return () => {};
  }, [data]);

  return (
    <div className="card col-span-1">
      <h5 className="text-lg mb-4">
        Last 30 Days Expenses
      </h5>
      {/* chart should be below title rather than squeezed beside it */}
      <CustomBarChart data={chartData} />
    </div>
  )
}
export default Last30DaysExpenses
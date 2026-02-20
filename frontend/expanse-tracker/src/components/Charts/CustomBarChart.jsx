import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell
} from "recharts"
const CustomBarChart = ({data}) => {

const getBarColor = (index) => {
    return index % 2 === 0 ? "#875cf5" : "#cfbefb";
}

const CustomTooltip = ({ active, payload }) => {

    if(active && payload && payload.length) {
        return (
            <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300" >
                <p className=""></p>
            </div>
        )
    }

}


  return (
    <div className="bg-white mt-6">
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid stroke="none">
                </CartesianGrid>
                 <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#555" }}stroke="none"></XAxis>
                <YAxis tick={{ fontSize: 12, fill: "#555"}} stroke="none"></YAxis>
                <Tooltip content={CustomTooltip}></Tooltip>
                <Bar
                    dataKey="amount"
                    fill="#FF8042"
                    radius={[10, 10, 0, 0]}
                    activeBar={{r: 8, fill : "yellow"}}
                    style={{ fill : "green"}}
                >
                    {data.map((entry, index) => (
            <Cell
              key={data}
              fill={getBarColor(index)}
            />
          ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}
export default CustomBarChart
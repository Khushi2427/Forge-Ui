import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Chart = ({
  data = [],
  xKey = "name",
  yKey = "value",
  height = 300,
  strokeColor = "#4f46e5",
  showGrid = true,
  strokeWidth = 3,
  className = "",
}) => {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-md ${className}`}>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={yKey}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
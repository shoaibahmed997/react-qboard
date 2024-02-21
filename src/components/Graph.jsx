import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Sun",
    worked: 3,
    fill:'#f3a111'
  },
  {
    name: "Mon",
    worked: 9,
    fill:'#64c595'
  },
  {
    name: "Tue",
    worked: 8,
    fill:'#64c595'
  },
  {
    name: "Wed",
    worked: 4,
    fill:'#64c595'
  },
  {
    name: "Thu",
    worked: 7,
    fill:'#64c595'
  },
  {
    name: "Fri",
    worked: 8,
    fill:'#64c595'
  },
  {
    name: "Sat",
    worked: 6,
    fill:'#dc4e41'
  },
];

function Graph() {
  return (
    <div className="graph-div">
        <BarChart width={700} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, 10]} />
          <Bar dataKey="worked" fill='fill' barSize={40} />
        </BarChart>

    </div>
  );
}

export default Graph;

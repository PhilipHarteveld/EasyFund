import React, { useState } from "react";
import { Data } from "../data";
import { Progress } from "@chakra-ui/react";

import { Line } from "react-chartjs-2";

import { CategoryScale } from "chart.js";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function Statistics() {
  const Investdata = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Savings",
        data: [10000, 17000, 15000, 20000, 25000, 20000],
        fill: true,
        backgroundColor: "#4D264C",
        borderColor: "#C02C6E",
      },
    ],
  };
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Savings",
        data: [10, 15, 20, 25, 30, 32],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className=" justify-between w-full flex flex-row ">
      <div className="w-1/2">
        <div className=" bg-cardBackground content-start  px-3 py-3 rounded-lg ">
          <h1 className="text-silver text-center font-bold mb-4">
            Current Balance
          </h1>
          <div className="mb-4">
            <Line data={Investdata} className="" />
          </div>
        </div>
      </div>
      <div className="bg-cardBackground w-1/4 ">
        <h1 className="text-center font-bold">Expenses</h1>
        <div className="flex justify-between mt-2 ">
          <h4 className=" ml-4 font-bold">Housing</h4>
          <h5 className=" mr-2">R100000</h5>
        </div>
      </div>
    </div>
  );
}

export default Statistics;

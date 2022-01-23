import React from "react";
import { Datatypes } from "../../../interfaces/associations";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

interface IProps {
  datasources: Datatypes;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        offset: true,
      },
    },
  },
  legend: {
    display: false,
  },
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Association Score vs Data Type",
    },
  },
};

export const BarChart = ({ datasources }: IProps) => {
  const labels = Object.keys(datasources);

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: Object.values(datasources),
        backgroundColor: "rgb(52,136,203)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

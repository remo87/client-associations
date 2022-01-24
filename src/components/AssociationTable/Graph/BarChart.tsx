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
import { Maybe } from "graphql/jsutils/Maybe";

interface IProps {
  datasources: [string, "Datatypes" | Maybe<number>][];
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
  maintainAspectRatio: false,
  scales: {
    y: {      
      suggestedMax: 1      
    },
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
      display: false,
    },
    title: {
      display: true,
      text: "Association Score vs Data Type",
    },
  },
};

export const BarChart = ({ datasources }: IProps) => {
  const data = {
    labels: datasources.map((entry) => entry[0]),
    datasets: [
      {
        label: "",
        data: Object.values(datasources.map((entry) => entry[1])),
        backgroundColor: "rgb(52,136,203)",
      },
    ],
  };
  return <Bar data-testid="bargraph" height={400} width={400} options={options} data={data} />;
};

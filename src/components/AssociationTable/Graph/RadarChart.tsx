import React from "react";
import { Datasources, Datatypes } from "../../../interfaces/associations";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Maybe } from "graphql/jsutils/Maybe";

interface IProps {
  datasources: [string, "Datatypes" | Maybe<number>][];
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: false,
  scale: {
    r: {
      suggestedMax: 1,
      ticks: {
        max: 1,
        stepSize: 0.25,
    },
    },
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

export const RadarChart = ({ datasources }: IProps) => {
  const data = {
    labels: datasources.map((entry) => entry[0]),
    datasets: [
      {
        data: Object.values(datasources.map((entry) => entry[1])),
        borderColor: "rgb(52,136,203)",
        backgroundColor: "rgba(0,0,0,0)",
        borderWidth: 1,
      },
    ],
  };
  return <Radar  data-testid="radargraph" height={400} width={400} data={data} options={options} />;
};

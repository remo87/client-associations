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

interface IProps {
  datasources: Datatypes;
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const RadarChart = ({ datasources }: IProps) => {
  const data = {
    labels: Object.keys(datasources),
    datasets: [
      {
        label: "# of Votes",
        data: Object.values(datasources),
        borderColor: "rgb(52,136,203)",
        borderWidth: 1,
      },
    ],
  };
  return <Radar data={data} />;
};

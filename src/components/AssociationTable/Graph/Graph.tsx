import React, { FC, useState } from "react";
import { BarChart, RadarChart } from ".";
import { useGetScoreById } from "../../../hooks/useGetScoreById";

interface IProps {
  targetId: String;
}

interface IRowProps {}

const FullRow: FC<IRowProps> = ({ children }) => (
  <tr>
    <td colSpan={4}>there's an error</td>
  </tr>
);

export const Graph = ({ targetId }: IProps) => {
  const [shuffleChart, setShuffleChart] = useState(false);
  const { data, error, loading } = useGetScoreById(targetId);

  if (error) return <FullRow>there's an error</FullRow>;

  if (loading) return <FullRow>is loading</FullRow>;

  if (data?.scoresById.datatypes === undefined) return <FullRow />;

  const filteredData = Object.entries(data?.scoresById.datatypes).filter(
    (entry) => entry[0] !== "__typename"
  );

  return (
    <tr onClick={() => setShuffleChart((shuffle) => !shuffle)}>
      <td colSpan={4}>
        {shuffleChart ? (
          <BarChart datasources={filteredData} />
        ) : (
          <RadarChart datasources={filteredData} />
        )}
      </td>
    </tr>
  );
};

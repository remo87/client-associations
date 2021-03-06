import React, { FC, useState } from "react";
import { BarChart, RadarChart } from ".";
import { useGetScoreById } from "../../../hooks/useGetScoreById";
import { Spinner } from "../../common";
import { FullRowCenter } from "../../styled";

interface IProps {
  targetId: String;
}

interface IRowProps {}

const FullRow: FC<IRowProps> = ({ children }) => (
  <tr>
    <td colSpan={4}>{children}</td>
  </tr>
);

export const Graph = ({ targetId }: IProps) => {
  const [shuffleChart, setShuffleChart] = useState(false);
  const { data, error, loading } = useGetScoreById(targetId);

  if (error)
    return (
      <FullRow>
        <FullRowCenter>
          There was an error obtaining the information. Please get in contact
          with support.
        </FullRowCenter>
      </FullRow>
    );

  if (loading)
    return (
      <FullRow>
        <FullRowCenter>
          <Spinner />
        </FullRowCenter>
      </FullRow>
    );

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

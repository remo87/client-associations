import React, { useState } from "react";
import { Row } from "../styled";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Data } from "../../interfaces/associations";
import { Graph } from ".";

export interface IProps {
  association: Data;
}

export const TableRow = ({ association }: IProps) => {
  const [expanded, setExpanded] = useState(false);

  const shuffleExpanded = () => {
    setExpanded((exp) => !exp);
  };

  return (
    <>
      <Row>
        <td onClick={shuffleExpanded}>{expanded ? <FaMinus /> : <FaPlus />}</td>
        <td>
          <a
            target="_blank"
            href={
              `https://platform.opentargets.org/target/` +
              association.target?.id
            }
            rel="noreferrer"
          >
            {association.target?.geneInfo?.symbol}
          </a>
        </td>
        <td>{association.target?.geneInfo?.name}</td>
        <td>{association.associationScore?.overall?.toFixed(4)}</td>
      </Row>
      {expanded ? (
        <Graph targetId={association.target?.id || ""} />
      ) : null}
    </>
  );
};

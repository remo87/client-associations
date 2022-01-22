import React, { useState } from "react";
import { Row } from "../styled";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Data } from "../../interfaces/associations";
import { Graph } from ".";

export interface IProps {
  associations: Data[];
}

export const Body = ({ associations }: IProps) => {
  const [expanded, setExpanded] = useState(false);

  const shuffleExpanded = () => {
    setExpanded((exp) => !exp);
  };

  return (
    <tbody>
      {associations.map((el) => (
        <>
          <Row key={el.target?.id}>
            <td onClick={shuffleExpanded}>
              {expanded ? <FaMinus /> : <FaPlus />}
            </td>
            <td>
              <a
                target="_blank"
                href={
                  `https://platform.opentargets.org/target/` + el.target?.id
                }
                rel="noreferrer"
              >
                {el.target?.geneInfo?.symbol}
              </a>
            </td>
            <td>{el.target?.geneInfo?.name}</td>
            <td>{el.associationScore?.overall}</td>
          </Row>
          {expanded ? <Graph /> : null}
        </>
      ))}
    </tbody>
  );
};

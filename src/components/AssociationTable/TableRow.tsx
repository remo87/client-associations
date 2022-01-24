import React, { useState } from "react";
import { Row } from "../styled";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Graph } from ".";
import { IDataListItem } from "../../interfaces/graphql";

export interface IProps {
  association: IDataListItem;
}

export const TableRow = ({ association }: IProps) => {
  const [expanded, setExpanded] = useState(false);

  const shuffleExpanded = () => {
    setExpanded((exp) => !exp);
  };

  return (
    <>
      <Row>
        <td>
          <button
            data-testid={`expand-${association.id}`}
            onClick={shuffleExpanded}
            type="button"
          >
            {expanded ? <FaMinus /> : <FaPlus />}
          </button>
        </td>
        <td>
          <a
            target="_blank"
            href={`https://platform.opentargets.org/target/` + association.id}
            rel="noreferrer"
          >
            {association.symbol}
          </a>
        </td>
        <td>{association.name}</td>
        <td>{association.overall?.toFixed(4)}</td>
      </Row>
      {expanded ? <Graph targetId={association.id || ""} /> : null}
    </>
  );
};

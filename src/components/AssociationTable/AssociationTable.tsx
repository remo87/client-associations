import React from "react";
import { useAssociationList } from "../../hooks/useAssociationList";
import { Table } from "../styled";
import { NoItems, TableRow, Header } from ".";
import { Spinner } from "../common";
import { FullRowCenter } from "../styled";

export const AssociationTable = () => {
  const { data, error, loading } = useAssociationList();

  if (error)
    return (
      <FullRowCenter>
        There was an error obtaining the information. Please get in contact with
        support.
      </FullRowCenter>
    );

  if (loading)
    return (
      <FullRowCenter>
        <Spinner />
      </FullRowCenter>
    );

  if (!data || data.length === 0) return <NoItems />;

  let associations = data
    .sort((a, b) => {
      if (a.overall && b.overall) {
        return b.overall?.valueOf() - a.overall.valueOf();
      } else {
        return -1;
      }
    })
    .slice(0, 5);
  return (
    <Table>
      <Header />
      <tbody>
        {associations.map((el) => (
          <TableRow key={el.id || ""} association={el} />
        ))}
      </tbody>
    </Table>
  );
};

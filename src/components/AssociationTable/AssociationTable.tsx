import React from "react";
import { useAssociationList } from "../../hooks/useAssociationList";
import { Table } from "../styled";
import { NoItems, TableRow, Header } from ".";

export const AssociationTable = () => {
  const { data, error, loading } = useAssociationList();

  if (error) {
    console.log(error);
    return <div>there's an error</div>;
  }

  if (loading) return <div>spinner</div>;

  if (!data || data.associations.length === 0) return <NoItems />;

  return (
    <Table>
      <Header />
      <tbody>
        {data?.associations.map((el) => (
          <TableRow key={el.target?.id || ""} association={el} />
        ))}
      </tbody>
    </Table>
  );
};

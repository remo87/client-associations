import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border: 1px solid #9f9f9e;
  border-collapse: collapse;
  text-align: start;

  * > td {
    border: 1px solid #9f9f9e;
    border-collapse: collapse;
    padding-left: 5px;
  }

  th {
    border: 1px solid #9f9f9e;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
  }

  thead {
      font-size: 14px
  }
`;

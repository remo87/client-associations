import React from 'react';
import {AssociationTable} from './components/AssociationTable';
import { Body } from './components/styled';

function App() {
  return (
    <Body>
      <h1>Genes associated with lung carcinoma</h1>
      <AssociationTable />
    </Body>
  );
}

export default App;

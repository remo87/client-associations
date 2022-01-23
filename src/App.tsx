import React from 'react';
import logo from './logo.svg';
import './App.css';
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

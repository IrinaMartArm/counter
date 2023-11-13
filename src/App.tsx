import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";

export type StateType =  {
      min: number
      max: number
      count: number
      maxInputValue: number
      minInputValue: number
}

function App() {
  return (
      <>
        <Counter/>
      </>
  );
}

export default App;

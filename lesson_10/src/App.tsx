import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HelloWorld, SecondFunction, Counter, ArrowUp, ArrowDown } from './components/Welcome';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <HelloWorld name='Jiri' age={19} />
        <HelloWorld name='Petr' age={20} />
        <SecondFunction />
        <Counter name='Counter:' />
        <br />
        <table border={1}>
          <thead>
            <tr>
              <th>Day</th>
              <th>Month</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Counter /></td>
              <td><Counter /></td>
              <td><Counter /></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div >
  );
}

export default App;

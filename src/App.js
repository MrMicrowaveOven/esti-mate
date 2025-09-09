import './App.css';
import Inputs from './Inputs.js';
import Display from './Display.js';
import { useState } from 'react';

const App = () => {
  const [interestRate, setInterestRate] = useState(0)
  const [loanAmount, setLoanAmount] = useState(0)
  return (
    <div className="app">
      <Inputs
        onInterestRateChange={(newInterestRate) => setInterestRate(newInterestRate)}
        onLoanAmountChange={(newLoanAmount) => setLoanAmount(newLoanAmount)}
      />
      <Display
        interestRate={interestRate}
        loanAmount={loanAmount}
      />
    </div>
  );
}

export default App;

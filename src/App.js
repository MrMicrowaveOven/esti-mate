import './App.css';
import Inputs from './Inputs.js';
import Display from './Display.js';
import { useState } from 'react';

const App = () => {
  const [creditScore, setCreditScore] = useState(0)
  const [loanAmount, setLoanAmount] = useState(0)
  return (
    <div className="app">
      <Inputs
        onCreditScoreChange={(newCreditScore) => setCreditScore(newCreditScore)}
        onLoanAmountChange={(newLoanAmount) => setLoanAmount(newLoanAmount)}
      />
      <Display
        creditScore={creditScore}
        loanAmount={loanAmount}
      />
    </div>
  );
}

export default App;

import './App.css';
import Inputs from './Inputs.js';
import Display from './Display.js';
import { useState } from 'react';

const YEARS = [5, 7, 10, 12, 15]

const App = () => {
  const [creditScore, setCreditScore] = useState(0)
  const [loanAmount, setLoanAmount] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [mode, setMode] = useState("interest")
  return (
    <div className="app">
      <Inputs
        creditScore={creditScore}
        onCreditScoreChange={(newCreditScore) => setCreditScore(newCreditScore)}
        loanAmount={loanAmount}
        onLoanAmountChange={(newLoanAmount) => setLoanAmount(newLoanAmount)}
        interestRate={interestRate}
        onInterestRateChange={(newInterestRate) => setInterestRate(newInterestRate)}
        mode={mode}
        onModeChange={(newMode) => setMode(newMode)}
      />
      <Display
        mode={mode}
        creditScore={creditScore}
        interestRate={interestRate}
        loanAmount={loanAmount}
      />
      {mode === "lender" &&
        <div className="range-display">
            <a>Credit Score Ranges:</a>
            <a>300-449 → Range 5</a>
            <a>450-599 → Range 4</a>
            <a>600-699 → Range 3</a>
            <a>700-799 → Range 2</a>
            <a>800-850 → Range 1</a>
        </div>
      }
      {mode === "lender" &&
        <div className="legal">
          <a>All calculations are approximate. Not an endorsement of any lender.</a>
        </div>
      }
    </div>
  );
}

export default App;

import { useState } from "react";
import "./Inputs.css";

const Inputs = ({
  creditScore,
  onCreditScoreChange,
  loanAmount,
  nightMode,
  onLoanAmountChange,
  interestRate,
  onInterestRateChange,
  mode,
  onModeChange,
}) => {
  const [creditScoreFieldInvalid, setCreditScoreFieldInvalid] = useState(false);
  const [loanAmountFieldInvalid, setLoanAmountFieldInvalid] = useState(false);
  const [interestRateFieldInvalid, setInterestRateFieldInvalid] =
    useState(false);

  const validateCreditScore = (value) => {
    if (value < 300 || value > 850) {
      return false;
    } else {
      return true;
    }
  };

  const creditScoreChange = (value) => {
    if (validateCreditScore(value)) {
      setCreditScoreFieldInvalid(false);
    }
    onCreditScoreChange(value);
  };

  const validateInterestRate = (value) => {
    if (value > 100) {
      return false;
    } else {
      return true;
    }
  };

  const interestRateChange = (value) => {
    if (validateInterestRate(value)) {
      setInterestRateFieldInvalid(false);
    }
    onInterestRateChange(value);
  };

  const validateLoanAmount = (value) => {
    if (!value) {
      return false;
    } else {
      return true;
    }
  };

  const loanAmountChange = (value) => {
    if (validateLoanAmount(value)) {
      setLoanAmountFieldInvalid(false);
    }
    onLoanAmountChange(value);
  };

  return (
    <div className="inputs">
      {mode === "lender" ? (
        <div className="input">
          <a className={"credit-score input-text"}>Credit Score:</a>
          <input
            className={`credit-score-input-field input-field ${
              creditScoreFieldInvalid && "invalid"
            } ${nightMode ? "input-night-mode" : ""}`}
            onChange={(event) => creditScoreChange(event.target.value)}
            value={creditScore}
            type="number"
            onKeyDown={(evt) =>
              ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
            }
            onBlur={(event) => {
              if (!validateCreditScore(event.target.value))
                setCreditScoreFieldInvalid(true);
            }}
          />
        </div>
      ) : (
        <div className="input">
          <a className={"interest-rate input-text"}>Interest Rate:</a>
          <input
            className={`interest-rate-input-field input-field ${
              interestRateFieldInvalid && "invalid"
            } ${nightMode ? "input-night-mode" : ""}`}
            onChange={(event) => interestRateChange(event.target.value)}
            value={interestRate}
            type="number"
            onKeyDown={(evt) =>
              ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
            }
            onBlur={(event) => {
              if (!validateInterestRate(event.target.value))
                setInterestRateFieldInvalid(true);
            }}
          />
        </div>
      )}
      <div className="input">
        <label className="radio">
          <input
            className="radio-circle"
            type="radio"
            checked={mode === "interest"}
            onChange={() => onModeChange("interest")}
          />
          <a className="input-text">Interest Mode</a>
        </label>
        <label className="radio">
          <input
            className="radio-circle"
            type="radio"
            checked={mode === "lender"}
            onChange={() => onModeChange("lender")}
          />
          <a className="input-text">Lender Mode</a>
        </label>
      </div>
      <div className="input">
        <a className={"loan-amount input-text"}>Loan Amount:</a>
        <div>
          <a className="dollar-sign-display">$</a>
          <input
            className={`loan-amount-input-field input-field ${
              loanAmountFieldInvalid && "invalid"
            } ${nightMode ? "input-night-mode" : ""}`}
            onChange={(event) => loanAmountChange(event.target.value)}
            value={loanAmount}
            type="number"
            onKeyDown={(evt) =>
              ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
            }
            onBlur={(event) => {
              if (!validateLoanAmount(event.target.value))
                setLoanAmountFieldInvalid();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Inputs;

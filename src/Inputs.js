import { useState } from 'react';
import './Inputs.css';

const Inputs = ({onCreditScoreChange, onLoanAmountChange}) => {
    const [creditScoreFieldInvalid, setCreditScoreFieldInvalid] = useState(false)
    const [loanAmountFieldInvalid, setLoanAmountFieldInvalid] = useState(false)

    const validateCreditScore = value => {
        if (value < 300 || value > 850) {
            return false
        } else {
            return true
        }
    }

    const creditScoreChange = (value) => {
        if(validateCreditScore(value)) {
            setCreditScoreFieldInvalid(false)
        }
        onCreditScoreChange(value)
    }

    const validateLoanAmount = value => {
        if (!value) {
            return false
        } else {
            return true
        }
    }

    const loanAmountChange = value => {
        if(validateLoanAmount(value)) {
            setLoanAmountFieldInvalid(false)
        }
        onLoanAmountChange(value)
    }

    return (
        <div className="inputs">
            <a className={"credit-score input-text"}>Credit Score:</a>
            <input
                className={`credit-score-input-field input-field ${creditScoreFieldInvalid && "invalid"}`}
                onChange={(event) => creditScoreChange(event.target.value)}
                type="number"
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                onBlur={(event) => {if(!validateCreditScore(event.target.value)) setCreditScoreFieldInvalid(true)}}
            />
            <a className={"loan-amount input-text"}>Loan Amount:</a>
            <div>
                <a className="dollar-sign-display">$</a>
                <input
                    className={`loan-amount-input-field input-field ${loanAmountFieldInvalid && "invalid"}`}
                    onChange={(event) => loanAmountChange(event.target.value)}
                    type="number"
                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                    onBlur={(event) => {if(!validateLoanAmount(event.target.value)) setLoanAmountFieldInvalid()}}
                />
            </div>
        </div>
    )
}

export default Inputs;
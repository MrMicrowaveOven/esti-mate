import './Inputs.css';

const Inputs = ({onCreditScoreChange, onLoanAmountChange}) => {

    return (
        <div className="inputs">
            <a className={"credit-score input-text"}>Credit Score:</a>
            <input className="credit-score-input-field input-field" onChange={(event) => onCreditScoreChange(event.target.value)} type="number"></input>
            <a className={"loan-amount input-text"}>Loan Amount:</a>
            <div>
                <a className="dollar-sign-display">$</a>
                <input className="loan-amount-input-field input-field" onChange={(event) => onLoanAmountChange(event.target.value)} type="number"></input>
            </div>
        </div>
    )
}

export default Inputs;
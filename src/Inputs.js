import './Inputs.css';

const Inputs = ({onCreditScoreChange, onLoanAmountChange}) => {

    return (
        <div className="inputs">
            <a className={"amount input-text"}>Credit Score</a>
            <input onChange={(event) => onCreditScoreChange(event.target.value)} type="text"></input>
            <a className={"interest input-text"}>Loan Amount</a>
            <input onChange={(event) => onLoanAmountChange(event.target.value)} type="text"></input>
        </div>
    )
}

export default Inputs;
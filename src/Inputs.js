import './Inputs.css';

const Inputs = ({onInterestRateChange, onLoanAmountChange}) => {

    return (
        <div className="inputs">
            <a className={"amount input-text"}>Loan Amount</a>
            <input onChange={(event) => onInterestRateChange(event.target.value)} type="text"></input>
            <a className={"interest input-text"}>Interest Rate</a>
            <input onChange={(event) => onLoanAmountChange(event.target.value)} type="text"></input>
        </div>
    )
}

export default Inputs;
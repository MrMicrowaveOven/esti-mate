import './Display.css'
const Display = ({loanAmount, interestRate}) => {
    return (
        <div className="display">
            <a>{interestRate}</a>
            <a>{loanAmount}</a>
        </div>
    )
}

export default Display;

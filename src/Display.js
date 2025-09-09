import './Display.css'
const Display = ({loanAmount, creditScore}) => {
    return (
        <div className="display">
            <a>{creditScore}</a>
            <a>{loanAmount}</a>
        </div>
    )
}

export default Display;

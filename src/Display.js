import './Display.css'
import LenderDisplay from './LenderDisplay';
const Display = ({loanAmount, creditScore}) => {
    return (
        <div className="display">
            {["A", "B", "C", "D", "E"].map(name => {
                return <LenderDisplay name={`Lender ${name}`}></LenderDisplay>
            })}
        </div>
    )
}

export default Display;

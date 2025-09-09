import "./LenderDisplay.css"

const LenderDisplay = ({name, interestRates=[0,0,0,0,0], monthlyPayments=[0,0,0,0,0]}) => {
    return (
        <div className="lender-display">
            <h1>{name}</h1>
            {[5, 7, 10, 12, 15].map((loanLength, index) => {
                return(
                    <div>
                        <h1>{loanLength} Year</h1>
                        <h3>Interest Rate: {interestRates[index] ? interestRates[index] : "∅"}%</h3>
                        <h3>Monthly Payment: ${monthlyPayments[index] ? monthlyPayments[index].toFixed(2) : "∅"}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default LenderDisplay
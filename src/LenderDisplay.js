import "./LenderDisplay.css"

const LenderDisplay = ({name, faded, interestRates=[0,0,0,0,0], monthlyPayments=[0,0,0,0,0]}) => {
    return (
        <div className="lender-display">
            <h1 className={faded && 'faded'}>{name}</h1>
            {[5, 7, 10, 12, 15].map((loanLength, index) => {
                return(
                    <div key={index}>
                        <h1 className={faded && 'faded'}>{loanLength} Year</h1>
                        <h3 className={faded && 'faded'}>Interest Rate: {interestRates[index] ? interestRates[index] : "∅"}%</h3>
                        <h3 className={faded && 'faded'}>Monthly Payment: ${monthlyPayments[index] ? monthlyPayments[index].toFixed(2) : "∅"}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default LenderDisplay
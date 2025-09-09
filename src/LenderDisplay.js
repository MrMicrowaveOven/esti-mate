import "./LenderDisplay.css"

const LenderDisplay = ({name}) => {
    return (
        <div className="lender-display">
            <h1>{name}</h1>
            {[5, 7, 10, 12, 15].map(loanLength => {
                return(
                    <div>
                        <h1>{loanLength} Year</h1>
                        <h3>Interest Rate: </h3>
                        <h3>Monthly Payment: </h3>
                    </div>
                )
            })}
        </div>
    )
}

export default LenderDisplay
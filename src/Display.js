import './Display.css'
import LenderDisplay from './LenderDisplay';
const YEARS = [5, 7, 10, 12, 15]
const Display = ({loanAmount, creditScore}) => {

    const calculateLenderAInterests = () => {
        if (creditScore >= 300 && creditScore < 450) {
            return Array(5).fill(17.99)
        } else if (creditScore >= 450 && creditScore < 600) {
            return Array(5).fill(16.99)
        } else if (creditScore >= 600 && creditScore < 700) {
            return Array(5).fill(14.49)
        } else if (creditScore >= 700 && creditScore < 800) {
            return Array(5).fill(12.49)
        } else if (creditScore >= 800 && creditScore < 850) {
            return Array(5).fill(10.99)
        } else { return Array(5).fill(null) }
    }

    const calculateMonthlyPayments = (interests) => {
        return YEARS.map((numYears, index) => {
            const monthlyInterestRate = interests[index]/1200.0
            const numberMonthlyPayments = numYears * 12
            const onePlusR = 1 + monthlyInterestRate
            const onePlusRToTheN = onePlusR ** numberMonthlyPayments
            const numerator = loanAmount * monthlyInterestRate * onePlusRToTheN
            const denominator = onePlusRToTheN - 1.0
            return numerator / denominator
        })
    }

    return (
        <div className="display">
            <LenderDisplay name="AQUA" interestRates={calculateLenderAInterests()} monthlyPayments={calculateMonthlyPayments(calculateLenderAInterests())}/>
            {["B", "C", "D", "E"].map(name => {
                return <LenderDisplay key={name} name={`Lender ${name}`} faded={true}></LenderDisplay>
            })}
        </div>
    )
}

export default Display;

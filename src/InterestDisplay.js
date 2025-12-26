import "./InterestDisplay.css";

const YEARS = [5, 7, 10, 12, 15];

const InterestDisplay = ({ monthlyPayments }) => (
  <div className="interest-display">
    {YEARS.map((numYears, index) => (
      <div className="year-group" key={index}>
        <h1>{numYears} Year:</h1>
        {monthlyPayments[index] ? (
          <h3 className="center">${monthlyPayments[index].toFixed(2)}</h3>
        ) : (
          <h1 className="center">∅</h1>
        )}
      </div>
    ))}
  </div>
);

export default InterestDisplay;

import "./NightModeSwitch.css";

const NightModeSwitch = ({ nightMode, onNightModeChange }) => {
  return (
    <div className="night-mode-switch-container">
      <div
        className={`night-mode-switch ${nightMode ? "night" : "day"}`}
        onClick={(event) => onNightModeChange()}
      >
        <div
          className={`night-mode-switch-text ${nightMode ? "night" : "day"}`}
        >
          {nightMode ? "𖤓" : "☾"}
        </div>
      </div>
    </div>
  );
};

export default NightModeSwitch;

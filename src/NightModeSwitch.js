import "./NightModeSwitch.css";

const NightModeSwitch = ({ nightMode, onNightModeChange }) => {
  return (
    <div className="night-mode-switch">
      Night Mode:{" "}
      <input
        type={"checkbox"}
        defaultChecked={nightMode}
        onChange={(newState) => onNightModeChange(newState.target.checked)}
      />
    </div>
  );
};

export default NightModeSwitch;

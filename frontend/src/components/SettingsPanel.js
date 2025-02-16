const SettingsPanel = ({ onThemeChange }) => {
    return (
        <div className="settings-panel">
            <button onClick={onThemeChange}>Switch Theme</button>
        </div>
    );
};

export default SettingsPanel;

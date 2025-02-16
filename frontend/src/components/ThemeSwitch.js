const ThemeSwitch = ({ toggleTheme }) => {
    return (
        <div className="theme-switch">
            <button className="toggle-theme-btn" onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemeSwitch;

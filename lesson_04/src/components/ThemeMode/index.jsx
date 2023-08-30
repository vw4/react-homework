import {useState, useEffect} from "react";

export default function ThemeMode(props) {
    const {onThemeChange} = props;

    const [themeMode, setThemeMode] = useState('light');
    useEffect(() => onThemeChange(themeMode), [themeMode, onThemeChange]);

    const themes = ['light', 'dark'];

    return <label>
        <select onChange={(e) => setThemeMode(e.target.value)} value={themeMode}>
            {themes.map((theme, index) =>
                <option key={index} value={theme}>{theme}</option>
            )}
        </select>
    </label>;
}
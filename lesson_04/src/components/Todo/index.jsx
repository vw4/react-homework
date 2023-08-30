import {useState} from "react";
import List from "../List";
import ThemeMode from "../ThemeMode";
import Statistics from "../Statistics";

export default function Todo() {
    const [themeMode, setThemeMode] = useState();
    const [list, setList] = useState();

    return <div>
        <ThemeMode onThemeChange={setThemeMode}/>
        <Statistics list={list}/>
        <List themeMode={themeMode} onListChange={setList}/>
    </div>;
}
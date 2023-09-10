import {IconButton} from "@mui/material";
import {Colorize as ColorizeIcon} from "@mui/icons-material";
import {Fragment, useEffect, useRef} from "react";
import './style.css';
import useLocalStorage from "../../../hooks/useLocalStorage";

export default function ColorPicker({onColorChange}) {
    const [color, setColor] = useLocalStorage('text-color', '#fff');
    const colorInputRef = useRef();

    useEffect(() => onColorChange(color), [color]);

    const onColorInputOpen = () => {
        colorInputRef.current.focus();
        colorInputRef.current.click();
    }

    const handleColorChange = () => {
        setColor(colorInputRef.current.value);
    }

    return <Fragment>
        <IconButton aria-label="colorize" varian="outline" onClick={onColorInputOpen}>
            <ColorizeIcon fontSize="inherit"/>
        </IconButton>
        <input type="color" value={color} className={'color-picker__input'} ref={colorInputRef} onChange={handleColorChange}/>
    </Fragment>;
}
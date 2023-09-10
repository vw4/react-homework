import {useState, useEffect} from "react";

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        if (localStorage.getItem(key)) {
            try {
                setValue(JSON.parse(localStorage.getItem(key)));
            } catch (e) {
                localStorage.removeItem(key);
            }
        }
    }, []);
    useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);

    return [value, setValue];
};

export default useLocalStorage;
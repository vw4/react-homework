import {createContext, useState} from "react";

export const CountryDataContext = createContext(null);

export const CountryDataProvider = ({children}) => {
    const [countryData, setCountryData] = useState(null);
    return <CountryDataContext.Provider value={{countryData, setCountryData}}>
        {children}
    </CountryDataContext.Provider>;
}
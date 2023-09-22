import {Layout} from "./pages/Layout";
import {Route, Routes} from "react-router-dom";
import {HomeRoute} from "./routes/HomeRoute";
import {CountriesRoute} from "./routes/CountriesRoute";
import {CountryRoute} from "./routes/CountryRoute";
import {NotFoundRoute} from "./routes/NotFoundRoute";
import {CountryDataProvider} from "./contexts/CountryDataProvider";

export function App() {
    return <CountryDataProvider>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomeRoute/>}/>
                <Route path='countries' element={<CountriesRoute/>}/>
                <Route path='country/:id' element={<CountryRoute/>}/>
                <Route path="*" element={<NotFoundRoute/>}/>
            </Route>
        </Routes>
    </CountryDataProvider>;
}

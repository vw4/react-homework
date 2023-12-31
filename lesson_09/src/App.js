import {Layout} from "./pages/Layout";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {HomeRoute} from "./routes/HomeRoute";
import {CountriesRoute} from "./routes/CountriesRoute";
import {countryLoader, CountryRoute} from "./routes/CountryRoute";
import {NotFoundRoute} from "./routes/NotFoundRoute";
import {Provider} from "react-redux";
import {store} from "./store/store";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route index element={<HomeRoute/>}/>
        <Route path='countries' element={<CountriesRoute/>}/>
        <Route path='country/:name' element={<CountryRoute/>} loader={countryLoader}/>
        <Route path="*" element={<NotFoundRoute/>}/>
    </Route>
))

export function App() {
    return <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>;
}

import {Outlet} from "react-router-dom";
import {Navigation} from "../../components/Navigation";
import './style.css';

export function Layout() {
    return <>
        <header>
            <Navigation/>
        </header>
        <main>
            <Outlet/>
        </main>
    </>;
}
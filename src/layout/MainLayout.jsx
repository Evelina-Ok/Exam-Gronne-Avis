import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";


export function MainLayout () {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}
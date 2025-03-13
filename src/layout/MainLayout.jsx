import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Separator } from "../components/Separator/Separator";


export function MainLayout () {
    return (
        <>
        <Header />
        <Separator />
        <Outlet />
        <Footer />
        </>
    )
}
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import Layout from "../components/Layout/Layout";
import ServiciosPage from "../pages/servicios-page/servicios-page";
import ComoTrabajoPage from "../pages/como-trabajo-page/como-trabajo-page";
import PideCitaPage from "../pages/pide-cita-page/pide-cita-page";
import TarifasPage from "../pages/tarifas-page/tarifas-page";



const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout />,
        children: [
            {
                path: "/inicio",
                element: <MainPage/>
            },
            {
                path: "/servicios",
                element: <ServiciosPage/>
            },
            {
                path: "/como-trabajo",
                element: <ComoTrabajoPage/>
            },
            {
                path: "/pide-cita",
                element: <PideCitaPage/>
            },
            {
                path: "/tarifas",
                element: <TarifasPage/>
            }
        ]
    }

]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import Layout from "../components/Layout/Layout";
import ServiciosPage from "../pages/servicios-page/servicios-page";



const router = createBrowserRouter([
    
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/inicio",
                element: <MainPage/>
            },
            {
                path: "/servicios",
                element: <ServiciosPage/>
            }
        ]
    }

]);

export default router;
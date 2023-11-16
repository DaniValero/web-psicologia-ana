import React from "react";
import "./layout.scss"
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <div className="navbar">
            <h3><Link to={"/inicio"}>Inicio</Link></h3>
            
            
            <div className="navbar-links">
                <Link to={"/servicios"}><a>Servicios</a></Link>
                <Link to={"/como-trabajo"}><a>Cómo trabajo</a></Link>
                <Link to={"/tarifas"}><a>Tarifas</a></Link>
                <Link to={"/pide-cita"}><a>Pide cita</a></Link>
            </div>

        </div>
    )

}

export default NavBar;
import React from "react";
import "./layout.scss"
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <div className="navbar">
            <h3><Link to={"/inicio"}>Logo</Link></h3>
            
            
            <div className="navbar-links">
                <Link to={"/servicios"}><p>Servicios</p></Link>
                <Link to={"/como-trabajo"}><p>Cómo trabajo</p></Link>
                <Link to={"/tarifas"}><p>Tarifas</p></Link>
                <Link to={"/citas"}><p>Pide cita</p></Link>

            </div>

        </div>
    )

}

export default NavBar;
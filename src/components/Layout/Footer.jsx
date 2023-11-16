import React from "react";
import "./layout.scss"
import { Link } from "react-router-dom";
import juntaAndalucia from "../../assets/Junta-andalucia.png"
import 'primeicons/primeicons.css';
        


function Footer() {

    return (
        <div className="footer">
            <div>
                <p>Contacto:</p>
                <p><i className="pi pi-envelope"></i> psicologa.anab@gmail.com</p>
                <p><i className="pi pi-phone"></i> 722 204 465</p>
            </div>

            <div className="colegiado">
                <img src={juntaAndalucia} alt="Logo Junta de Andalucía" className="logo-junta" />
                <p>Número de colegiado: AN1358</p>
            </div>
            <div className="footer-list">
                <a><Link>Servicios</Link></a>
                <a><Link>Preguntas frecuentes</Link></a>
                <a><Link>Pedir cita</Link></a>
                <a><Link>Terminos y condiciones</Link></a>

            </div>
        </div>
    )

}

export default Footer;
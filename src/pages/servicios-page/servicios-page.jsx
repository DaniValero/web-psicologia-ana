import React, {useRef} from "react";
import "./servicios-page.scss"

import miedos from "../../assets/miedos.png"
import ansiedad from "../../assets/ansiedad.png"
import depresion from "../../assets/depresion.png"

function ServiciosPage() {

    const depresionRef = useRef(null);
    const ansiedadRef = useRef(null);


    const scrollToService = (ref) => {
        if (ref.current) {
        ref.current.scrollIntoView({
            behavior: "smooth",
        });
        }
    };


    return (
        <>
            <div className="servicios-container">
                <div className="depresion servicio" onClick={() => scrollToService(depresionRef)}>
                    Depresión en adultos y adolescentes
                </div>
                <div className="ansiedad servicio" onClick={() => scrollToService(ansiedadRef)}>
                    Ansiedad y estrés
                </div>
                <div className="toc servicio">
                    Trastorno obsesivo-compulsivo
                </div>
                <div className="habilidades-sociales servicio">
                    Habilidades sociales
                </div>
                <div className="miedos servicio">
                    Miedos y fobias
                </div>
            </div>

            <h2>Servicios de psicología</h2>
            <hr />

            <div className="servicios-wrapper">
                
                <div className="descripcion-servicio" >
                    <div>

                        <h3 id="depresion" ref={depresionRef}>Depresión en adultos y adolescentes</h3>
                        <p>
                            La depresión es una carga pesada que puede afectar tanto a adultos como a adolescentes, impactando significativamente en la calidad de vida. En nuestra plataforma de psicología, te brindamos información y apoyo práctico para comprender y superar la depresión. <br /><br />


                            Nuestro equipo de profesionales está comprometido a guiarte a través de enfoques respaldados por la evidencia, ayudándote a comprender las raíces de tu depresión y proporcionándote estrategias efectivas para manejarla. Buscamos desmitificar la depresión, eliminar el estigma asociado y fomentar un diálogo abierto sobre la salud mental. <br /><br />


                            Explora nuestros recursos para obtener consejos prácticos y apoyo emocional específicamente diseñados para enfrentar la depresión. Juntos, trabajemos hacia tu bienestar mental, proporcionándote las herramientas necesarias para recuperar el equilibrio y la vitalidad en tu vida diaria.
                        </p>
                    </div>

                    <img src={depresion} alt="Imagen representando depresión" />
                </div>

                
                <div className="descripcion-servicio">
                    
                    <img src={ansiedad} alt="Imagen representando ansiedad" />

                    <div>

                        <h3 id="ansiedad" ref={ansiedadRef}>Ansiedad y estrés</h3>
                        <p>
                            La ansiedad es una emoción común, pero cuando se vuelve abrumadora, puede afectar tu vida diaria. En nuestra web de psicología, te ofrecemos información y apoyo práctico para entender y superar la ansiedad. <br /><br />

                            A través de enfoques respaldados por la evidencia, nuestro equipo de profesionales te guiará para comprender las raíces de tu ansiedad y te proporcionará estrategias efectivas para manejarla. Queremos desmitificar la ansiedad, eliminar el estigma y fomentar un diálogo abierto. <br /> <br />

                            Explora nuestros recursos para obtener consejos prácticos y apoyo emocional. Juntos, trabajemos hacia tu bienestar mental.
                        </p>
                    </div>


                </div>

            </div>


        </>
    )

}

export default ServiciosPage;
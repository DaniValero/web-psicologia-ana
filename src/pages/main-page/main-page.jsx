import React from "react";
import "./main-page.scss"

function MainPage() {
    

    return (
        <>
        <div className="intro">

            <div className="intro-text">
            <h3>Intro</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam alias ratione ea, illum nesciunt aperiam dolor, et laboriosam ullam illo aut soluta, doloremque enim.</p>
            </div>

            <div>
                <img src="#" alt="Ana Belén Psicóloga" />
            </div>
        </div>

        <div className="citas">
                <button>Reserva tu cita</button>
                <button>Contacto</button>
            </div>
            
        <div className="reviews">
            Aqui van las reviews
        </div>
        </>
    )

}

export default MainPage;
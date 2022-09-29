import React from 'react';
import '../../App.css';

     
        
const Contacto = () => {

  return (
  <div>
    <h1 className="display-3">Somos Guecal Vivero Colombiano</h1>
    <p className="lead">En este espacio encontrara los información con la cual te podras contactar con nostros.</p>
    

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex">
        <ul className="navbar-nav mx-auto mb-3">
  
            <li className="nav-item">
                <a className="nav-link" href="tel:+573232134170">Llama ahora</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="mailto:developer.guevara@gmail.com">Contactar por correo</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://api.whatsapp.com//send?phone=3232134170&text= hola necesito mas informacion">envianos un mensaje de WhatsApp</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com/guecalcolombiantropicals">Comparte en facebook</a>
            </li>
        </ul>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.814840683524!2d-74.08915458523784!3d4.627099996638694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f997d6200758d%3A0xa2955f89255527d8!2sCra.%2033%20%2323-51%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1650821479897!5m2!1ses-419!2sco" width="1295" height="500"></iframe>
        <div>
            <p className="mt-3">Más información</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="productos.php" role="button">Ver catalogo de planta</a>
            </p>
        </div>
    </nav>
</div>
);
}

export default Contacto;
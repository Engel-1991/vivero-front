import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Contacto from './pages/contacto/Contacto';


const App = () => {


  const sidebar = useRef<HTMLInputElement>(null);
  const openMenu = () => {
    sidebar?.current?.classList.toggle('active');
  }
  return ( 
    <BrowserRouter>
     <div id="every">
        <p id=""></p>
        <div id="sidebar" ref={sidebar}>
            <div className="toggle-btn" onClick={openMenu}>
             <span></span>
             <span></span>
             <span></span>
            </div>
            
            <ul>   
              <li>Guecal S.A.S</li>
              <form role="search" method="get" className="search-form" action="https://www.viveroonline.com.co/"> <input type="search" className="search-field" placeholder="Search …" value="" name="s"/><button type="submit" className="search-submit"><i className="far fa-search"></i></button></form>
              <li><a href="#">Home</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Materas</a></li>
                <li><a href="#">Promociones</a></li>
                <li><a href="#">Contactanos</a></li> 
                
                
            </ul>
        </div>
        </div>
        <div id="contenido">
        </div>
        <script type="text/javascript">
        
        
        
        {/* function openMenu() {
            document.getElementById('sidebar').classList.toggle('active');
            }
            
            function puno(){
                var contenido = document.getElementById("contenido");
                contenido.innerHTML = `
                <iframe src="https://lprestudios1.000webhostapp.com" width="100%" height="10000"></iframe>
                `;
            } */}
      
            
        </script>
    <div className="App">
      <div className="contenedor">

        <div className="columna1">
          <a href="https://www.sololearn.com/" target="_blank">
            <img className="enlace" alt="SoloLearn" src="https://www.sololearn.com/Uploads/icons/sololearn.png" />
          </a>
          <a href="https://www.facebook.com/">
            <img className="enlace" alt="Facebook" src="https://www.sololearn.com/Uploads/icons/facebook.png" />
          </a>
          <a href="https://www.twitter.com/">
            <img className="enlace" alt="Twitter" src="https://www.sololearn.com/Uploads/icons/twitter.png" />
          </a>

        </div>

        <div>
          <a href="https://www.Guecal.com/">
            <img className="titulo" alt="Twitter" src="https://viverosence.es/wp-content/uploads/2018/07/logo-viveros-ence-b1.png" />
          </a>
        </div>
        <div className="sticky-toolbar columna3">
          <a aria-label="go to the cart page" href="" data-tooltip="view cart">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="27" height="27" viewBox="0 0 24 24">
              <path d="M17 16H8.387l.334-1h10.034l2.571-9H6.644l-.9-3H3v2h1.256l2.695 8.984-.708 2.125A2.995 2.995 0 0 0 4 19c0 1.654 1.346 3 3 3s3-1.346 3-3c0-.352-.072-.686-.184-1h4.369A2.943 2.943 0 0 0 14 19c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3zm1.674-8-1.429 5H8.744l-1.5-5h11.43zM8 19c0 .551-.449 1-1 1s-1-.449-1-1 .449-1 1-1 1 .449 1 1zm9 1c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1z" />
            </svg>
          </a>

          <a aria-label="give us a call" href="" data-tooltip="call us">   </a>
          <a aria-label="give us a call" href="" data-tooltip="call us">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="27" height="27" viewBox="0 0 24 24">
              <path d="M15.894 22.239c-3.018 0-6.569-1.602-9.551-4.582-4.758-4.759-6-10.971-2.828-14.143a5.89 5.89 0 0 1 3.392-1.696l.76-.11 2.797 6.522-2.797 1.398c.648 1.228 1.63 2.497 2.919 3.786 1.229 1.229 2.497 2.204 3.77 2.896l1.314-2.573 6.483.926.038.827c.095 2.059-.495 3.786-1.706 4.996-1.184 1.184-2.793 1.753-4.591 1.753zM6.461 3.972a3.9 3.9 0 0 0-1.532.958c-2.3 2.299-1.004 7.48 2.828 11.313 3.834 3.833 9.014 5.126 11.314 2.828.766-.766 1.042-1.776 1.11-2.67l-3.367-.481-.646 1.294a1.974 1.974 0 0 1-1.186 1.01 2.044 2.044 0 0 1-1.583-.157c-1.44-.783-2.863-1.873-4.228-3.238-1.43-1.43-2.529-2.859-3.268-4.248a2.008 2.008 0 0 1-.14-1.561 1.989 1.989 0 0 1 1.012-1.182l1.106-.553-1.42-3.313z" />
            </svg>
          </a>

          <a aria-label="go to the contact page" href="" data-tooltip="email us">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="27" height="27" viewBox="0 0 24 24">
              <path d="M2 4v16h20V4H2zm18 2v.465l-8 5.333-8-5.333V6h16zM4 18V8.869l8 5.334 8-5.334V18H4z" />
            </svg>
          </a>

        </div>
      </div>
    </div><nav>

        <ul>

          <li>
        <a>
          <Link to="/">Home</Link>

       
        <span className="caret"></span></a>
            <div>

              <ul className="sub-menu">

                <li><a href="products.html#chair">Volver al Menu</a></li>


                <li><a href="products.html#table">Salir</a></li>

              </ul>

            </div>



          </li>

          <li>
            <a href="products.html">Nuestros Servicios <span className="caret"></span></a>

            <div>

              <ul className="sub-menu">

                <li><a href="products.html#chair">Asesorias y Cotizaciones</a></li>


                <li><a href="products.html#table">Capacitacion</a></li>


                <li><a href="cooker.html">Mantenimiento</a></li>

                <li><a href="cooker.html">Soporte</a></li>
              </ul>

            </div>

          </li>


          <li>
          <a>
          <Link to="/products">Productos</Link>

       <span className="caret"></span></a>

            <div>

              <ul className="sub-menu">

                <li><a href="products.html#chair">Plantas de Jardin</a></li>


                <li><a href="products.html#table">Planta para Interiores</a></li>


                <li><a href="cooker.html">Monsais</a></li>

                <li><a href="products.html#chair">Arboles</a></li>


                <li><a href="products.html#table">Plantas Aromaticas</a></li>


                <li><a href="cooker.html">Orquideas</a></li>

              </ul>

            </div>

          </li>
          <li>
            <a href="products.html">Materas <span className="caret"></span></a>

            <div>

              <ul className="sub-menu">

                <li><a href="products.html#chair">Matera de Barro</a></li>


                <li><a href="products.html#table">Matera de Ceramica</a></li>


                <li><a href="cooker.html">Matera de Cemento</a></li>

                <li><a href="products.html#chair">Matera de Lamina</a></li>


                <li><a href="products.html#table">Matera de Plastico</a></li>


                <li><a href="cooker.html">Bases para Materas</a></li>

              </ul>

            </div>

          </li>


          <li><a href="about.html">Promociones</a>



          </li>
          <li>

          <a>
          <Link to="/contacto">Contacto</Link>

          <span className="caret"></span></a>

          </li>

        </ul>

      </nav>

      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="contacto" element={<Contacto  />} />
          </Routes>
      {/* <Routes>
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
          </Routes> */}
      <footer>
        <div className="container">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
          <p>&copy; All rights reserved.</p>
        </div>
      </footer>
      </BrowserRouter>
  );
}
export default App;


import React, { useEffect, useState } from 'react';
import './Products.css';
import '../../App.css';

type resultProps = {
  Id: number;
  Nombre: string;
  PrecioUni: string;
  PrecioVen: string;

  
};
const Products = () => {
  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("http://localhost/miscelanea/api/productos/Obtener", {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData);
    };

    api();
  }, []);
  return (

  <div>
    <div className="Products">
      <div className="contenedor"></div>
      <header className="App-header">
    <a href="https://www.twitter.com/">
    <img className="imagen socio7" alt="Twitter" src="https://img.freepik.com/fotos-premium/naturaleza-hoja-verde-jardin-verano-plantas-hojas-verdes-naturales-que-utilizan-como-fondo-primavera-portada-verde-medio-ambiente-ecologia-papel-tapiz_103077-212.jpg?w=996" />

</a>

<a className="perro socio">BIENVENIDOS A VIVERO COLOMBIANO GUECAL</a>
<a className="titulo2 socio2" >Conectamos la Naturaleza...</a>
<a className="btncontacto socio3" href="https://cdn.euroinnova.edu.es/img/subidasEditor/disen%CC%83o%20sin%20ti%CC%81tulo%20(12)-1613385657.webp">
<button type="button" className="s btn btn-success"><i className="fab fa-stripe-s"></i>Ver todas los Categorias</button></a>
<a className="perro2 socio4" href="https://cdn.euroinnova.edu.es/img/subidasEditor/disen%CC%83o%20sin%20ti%CC%81tulo%20(12)-1613385657.webp">Vivero</a>
<a className="perro2 socio5" href="https://cdn.euroinnova.edu.es/img/subidasEditor/disen%CC%83o%20sin%20ti%CC%81tulo%20(12)-1613385657.webp">Paisajismo</a>
<a className="perro2 socio6" href="https://cdn.euroinnova.edu.es/img/subidasEditor/disen%CC%83o%20sin%20ti%CC%81tulo%20(12)-1613385657.webp">Jardineria</a>
</header>
</div>




  <h1>Mas sobre Guecal Vivero Colombiano S.A.S</h1>

<div className="container1">

<p>Nuestra Empresa  se dedica al sector agrícola, venta de plantas a nivel nacional  y demás productos a nivel internacional</p>
<p>Nos especializamos en el sector de la jardinería, paisajismo, sistema de riego, mantenimientos de jardines ornamentales y amplio conocimiento en el comportamiento de las plantas, esto nos a llevado a apasionarnos en armonizar y cambiar espacios sostenibles en nuestro entorno. Administrador de Empresas, Paisajista y  ViveroGuecalonline SAS.</p>

</div>
{result.map((value) => {
  return (
    <div className="product">  
    <img src="https://image.shutterstock.com/image-vector/square-logo-design-vector-blue-260nw-706178086.jpg" alt=""></img>  
    <div className="firstcap ">  {value.Nombre}  
    </div>  
    
    <div className="secondcap">  
      basic description of the product goes here   
    </div> 
    
    <div className="thirdcap">  
    {value.PrecioUni}   
    </div>  
    
    <div className="fourthcap">  
      RP -    {value.PrecioVen}   
    </div>  
    <a href="Products/Curry.html"><button className="order">  
      Buy Now  
    </button></a> 
  </div> 
  );
})}



</div>




  );
}

export default Products; 

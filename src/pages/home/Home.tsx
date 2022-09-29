import React from 'react';
import img from '../img/Pgloriosum.jpg';

     
        


const Home = () => {
  return (
    
<div className="jumbotron text-center">
    <h1 className="display-3">Bienvenidos a nuestro website</h1>
    <p className="lead">En este Lugar puedes contar todos tipo de plantas, las cuales las puedes conservar en tu lugar de vivienda.</p>
    <hr className="my-2"></hr>
    <img src={img} />
    <img src="../img/Pgloriosum.jpg" width="300" className="img-thumbnail rounded mx-auto d-block" />
    <p>Más información</p>
    <p className="lead">
        <a className="btn btn-primary btn-lg" href="productos.php" role="button">Ver catalogo de plantas</a>
    </p>
</div>                                          
  );
}

export default Home;

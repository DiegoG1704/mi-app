import React from 'react';
import "https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menue from './menu';
import Registro from './datos';
import Nosotros from './nosotros';
import logo from './imagenes/fondo.PNG';
import Carrusel from './carruselSr';
import Base from './carruselSl';
import Contacto from './carruselCs';




export default function Apps (){
  const cards = [
      {
        id: 1,
        title: "Destino1",
        image: logo,
        categoria: "Costa",
        descripcion:"hhhh"
      },
      {
        id: 2,
        title: "Destino2",
        image: logo,
        categoria: "Costa",
        descripcion:"gggg"
      },
      {
        id: 3,
        title: "Destino3",
        image: logo,
        categoria: "Sierra",
        descripcion:"ffff"
      },
      {
          id: 4,
          title: "Destino4",
          image: logo,
          categoria: "Sierra",
          descripcion:"dddd"
        },
      {
          id: 5,
          title: "Destino5",
          image: logo,
          categoria: "Selva",
          descripcion:"sss"
        },  
      {
          id: 6,
          title: "Destino6",
          image: logo,
          categoria: "Selva",
          descripcion:"aaa"
        },  
    ];
    return (
        <div className='contenedor' style={{paddingTop:"30px"}}>
            <div className='menu' style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Menue/>    
            </div >
            <div>
                <Carrusel/>
            </div>
            <div></div>
            <div style={{paddingTop:"50px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Registro/>
            </div>       

            <div className="container d-flex justify-content-center align-items-center h-100" style={{ paddingTop:"50px"}}>
                <div className="row">
                    {cards.map(({ title, image, id , descripcion}) => (
                    <div className="col-md-4" key={id} style={{ paddingTop:"30px"}}>
                        <Nosotros imageSource={image} title={title} descripcion={descripcion}/>
                    </div>
                    ))}
                </div>
            </div>
            <div style={{paddingTop:"50px"}}>
              <Contacto/>
            </div>



            <div style={{marginTop:"50px"}}>
              <Base/>
            </div>


                    
        </div>


        
        
        
    )
}
        
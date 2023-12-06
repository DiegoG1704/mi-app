import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';



export default function Menue() {
    // State for user authentication
    const [isLoggedIn, setLoggedIn] = useState(true);
    const [userName, setUserName] = useState('');
  
    // Navigation hook
    const navigate = useNavigate();
  
    // Refs for PrimeReact components
    const menuLeft = useRef(null);
    const menuRight = useRef(null);
    const toast = useRef(null);
    
    // Logout handler
    const handleLogout = () => {
      setLoggedIn(false);
      navigate('/');
    };

    const handlePerfil = () => {
      navigate('/Perfil');
    };
  
    // Menu items
    const items = [
      {
        items: [
          
          {
            label:"Perfil",
            command:handlePerfil
          },
          {
            label:"Cerrar Session",
            command:handleLogout
          },
        ],
      },
    ];
  
    
  return (

    <Navbar expand="lg" style={{background:"#FFFFFF"}}>
      <Container fluid>
        <div style={{paddingRight:"100px"}}>
            <h1 className="m-0 text-primary"><span className="text-dark">TRAVEL</span>ER</h1>
        </div>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
            <Navbar.Brand href='#'>Inicio</Navbar.Brand>
            <Navbar.Brand href='#'>Nosotros</Navbar.Brand>
            <Navbar.Brand href='#'>Servicios</Navbar.Brand>
            <Navbar.Brand href='#'>Paquetes</Navbar.Brand>
            <Navbar.Brand href='#'>Contacto</Navbar.Brand>

        </Navbar.Collapse>
      </Container>
      <div className="card flex justify-content-center">
        <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" style={{display:"flex", textAlign:"center",alignItems:"center",justifyContent:"center"}}/>
            <Avatar image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup shape="circle"/>
            {isLoggedIn && <span style={{ marginLeft: '10px' }}>{userName}</span>}
        </div>
    </Navbar>

  );
}
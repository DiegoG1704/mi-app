import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LogValidation'; // Importando una función de validación desde un archivo externo

export default function Login() {
  // Estado para gestionar los valores de entrada del formulario y los errores
  const [value, setValue] = useState({
    usuario: '',
    contraseña: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Función manejadora para actualizar el estado cuando cambian los valores de entrada
  const handleInput = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  // Función manejadora para la presentación del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(value)); // Validar el formulario utilizando la función de validación externa

    // Realizar una solicitud al servidor para autenticar al usuario
    const response = await fetch('http://localhost:8081/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    });

    const result = await response.json();

    if (response.ok) {
      // Autenticación exitosa, redirigir a la página deseada
      navigate('/Index');
    } else {
      // Mostrar errores o realizar acciones adicionales si la autenticación falla
      console.error(result.error);
    }
  };

  // Renderizado JSX del formulario de inicio de sesión
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        paddingTop: '200px'
      }}
    >
      <h1>Iniciar Sesión</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column'
        }}
      >
        <form action='' onSubmit={handleSubmit}>
          {/* Campo de entrada para el nombre de usuario */}
          <div className="flex justify-content-center" style={{ marginTop: '30px' }}>
            <span className="p-float-label">
              <InputText style={{ width: '400px' }} id="username" name="usuario" onChange={handleInput} />
              <label htmlFor="username">Usuario</label>
            </span>
            {errors.usuario && <span className="text-danger" style={{ marginTop: '5px' }}>{errors.usuario}</span>}
          </div>
          {/* Campo de entrada para la contraseña */}
          <div className="flex justify-content-center" style={{ marginTop: '30px' }}>
            <span className="p-float-label">
              <InputText style={{ width: '400px' }} id="password" name="contraseña" type="password" onChange={handleInput} />
              <label htmlFor="password">Contraseña</label>
            </span>
            {errors.contraseña && <span className="text-danger" style={{ marginTop: '5px' }}>{errors.contraseña}</span>}
          </div>
          {/* Botón de envío */}
          <div className="card flex justify-content-center" style={{ marginTop: '30px', width: '400px' }}>
            <Button label="Iniciar Sesión" type="submit" />
          </div>
        </form>
        {/* Enlace para contraseña olvidada */}
        <div style={{ marginTop: '20px' }}>
          <a href="#">¿Has olvidado la contraseña?</a>
        </div>
        {/* Separador */}
        <Divider />
        {/* Botón de registro */}
        <div className="card flex justify-content-center" style={{ width: '200px', justifyContent: 'center' }}>
          <Link to="/Registrar">
            <Button style={{ width: '200px' }} label="Registrar" />
          </Link>
        </div>
      </div>
    </div>
  );
}
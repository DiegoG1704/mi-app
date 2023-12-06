import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Link, useNavigate } from 'react-router-dom';
import RegistroValidation from './singup';
import axios from 'axios';

export default function Registrar() {
  const [values, setValues] = useState({
    usuario: '',
    contraseña: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const handleInput = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(RegistroValidation(values));

    // Verificar si hay errores antes de enviar la solicitud
    if (!errors.usuario && !errors.contraseña) {
      axios.post('http://localhost:8081/register', values)
        .then((res) => {
          setMessage('Registro exitoso');
          // Puedes redirigir al usuario aquí si es necesario
          navigate('/');
        })
        .catch((err) => {
          setMessage('Error en el registro');
          console.log(err);
        });
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', paddingTop: '200px' }}>
      <h1>Registrarse</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-content-center" style={{ marginTop: '30px' }}>
            <span className="p-float-label">
              <InputText
                style={{ width: '400px' }}
                id="username"
                value={values.usuario}
                onChange={(e) => handleInput('usuario', e.target.value)}
              />
              <label htmlFor="username">Usuario</label>
            </span>
            {errors.usuario && <span className="text-danger" style={{ marginTop: '5px' }}>{errors.usuario}</span>}
          </div>
          <div className="flex justify-content-center" style={{ marginTop: '30px' }}>
            <span className="p-float-label">
              <InputText
                style={{ width: '400px' }}
                id="password"
                type="password"
                value={values.contraseña}
                onChange={(e) => handleInput('contraseña', e.target.value)}
              />
              <label htmlFor="password">Contraseña</label>
            </span>
            {errors.contraseña && <span className="text-danger" style={{ marginTop: '5px' }}>{errors.contraseña}</span>}
          </div>
          <div className="flex justify-content-center" style={{ marginTop: '30px', width: '400px' }}>
            <Button label="Registrarse" type="submit" />
          </div>
        </form>
        {message && <div style={{ marginTop: '10px' }}>{message}</div>}
        <Divider/>

        <div className="flex justify-content-center" style={{width:'200px',justifyContent:'center' }}>
            <Link to="/"><Button style={{width:"200px"}} label="volver" /></Link>
        </div>
                
      </div>
    </div>
  );
}

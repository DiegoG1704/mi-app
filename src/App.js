import './App.css';
import Apps from './paginaWeb/index';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Login from './paginaWeb/login';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Registrar from './paginaWeb/Registrar';
import Perfil from './paginaWeb/perfil';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Registrar' element={<Registrar/>}></Route>
        <Route path='/Index' element={<Apps/>}></Route>
        <Route path='/Perfil' element={<Perfil/>}></Route>
        {/* <ProtectedRoute path='/Index' element={<Apps />}
    isAuthenticated={ lógica de autenticación }
    redirectTo="/"
  /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

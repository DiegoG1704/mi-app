import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

export default function Perfil(){
  return(
    <div>
      <h1>Bienvenido</h1>
      <Link to={"/Index"}><Button style={{width:'50px', height:'20px'}} label="ir"/></Link>
    </div>
    )
}

import React,{useState} from 'react'; 
import { Image } from 'primereact/image';
import PropTypes from "prop-types";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import 'primeicons/primeicons.css';
        



export default function Nosotros({imageSource, title, descripcion}){
    const [visible, setVisible] = useState(false);

    
    

    return(
        <div className="card text-center animate__animated animate__fadeInUp" style={{display:'flex', alignItems:"center",justifyContent:'center',textAlign:'center'}}>
            <div className='overflow-hidden' style={{margin:"10px"}}>
                <Image src={imageSource} alt="Image" width="400"/>
            </div>
            <div className="card-body text-light" style={{fontSize:"red"}}>
                <h4 style={{color:"black"}}>{title}</h4>
            </div>
            <div className="flex justify-content-center">
                <Button style={{margin:"10px"}} label="Mas Informacion" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                <Button style={{margin:"10px"}} label="Comprar Paquete" icon="pi pi-external-link"/>
                <Dialog draggable={false} visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                    
                        <div style={{display:"flex", flexDirection:"inherit"}}>
                            <div style={{width:"50%"}}>
                                <h1>{title}</h1>
                                <p className="m-0" st>
                                    {descripcion}
                                </p>  
                            </div>
                            <div style={{width:"50%",margin:"10px"}}>
                                <Image src={imageSource} alt="Image" width="400"/>
                            </div>
                        </div>
                             
                </Dialog>  
            </div>
            
        </div>            
    );
}

                                  

Nosotros.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string, 
    descripcion: PropTypes.string
  };
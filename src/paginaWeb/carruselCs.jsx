import React,{useState} from 'react'; 
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from "primereact/inputtextarea";


export default function Contacto() {
    const [value, setValue] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Peru', code: 'Pe' },
        { name: 'Chile', code: 'Ch' },
        { name: 'Colombia', code: 'Co' },
        { name: 'Bolivia', code: 'Bo' },
        { name: 'Argentina', code: 'Ar' },
        { name: 'Uruguay', code: 'Ur' },
        { name: 'Paraguay', code: 'Pa' },
        { name: 'Venezuela', code: 'Ve' },
        { name: 'Ecuador', code: 'Ec' }
    ];

    return(
        <div style={{display:'flex', alignItems:"center",justifyContent:'center',textAlign:'center', flexDirection:"column"}}>
            <h1>CONTACTO</h1>
            <div style={{display:'flex'}}>
                <div className="flex " style={{display:'flex', flexDirection:"column"}}>

                    <InputText style={{width:"350px",margin:"15px"}} value={value} placeholder='Nombre' onChange={(e) => setValue(e.target.value)} />
                </div>
                <div className="flex justify-content-center" style={{display:'flex', flexDirection:"column"}}>

                    <InputText style={{width:"350px",margin:"15px"}} value={value} placeholder='Apellido' onChange={(e) => setValue(e.target.value)} />
                </div>
            </div>
            <div style={{display:'flex'}}>
                <div className="flex justify-content-center" style={{display:'flex', flexDirection:"column"}}>

                    <InputText style={{width:"350px",margin:"15px"}} value={value} placeholder='Correo' onChange={(e) => setValue(e.target.value)} />
                </div>
                <div className="flex justify-content-center" style={{display:'flex', flexDirection:"column"}}>

                    <InputText style={{width:"350px",margin:"15px"}} value={value} placeholder='Telefono' onChange={(e) => setValue(e.target.value)} />
                </div>
            </div>
            <div>
                <div className="flex justify-content-center" style={{display:'flex', flexDirection:"column"}}>

                    <Dropdown style={{width:"730px",margin:"15px"}} value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} 
                    optionLabel="name" placeholder="Pais" className="w-full md:w-14rem" />      
                </div>
            </div>
            <div>
                <div className="flex justify-content-center" style={{display:'flex', flexDirection:"column"}}>
                    <InputTextarea style={{width:"730px",margin:"15px"}} autoResize placeholder="Comentario" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                </div>
            </div>
            <div></div>
        </div>
    )
}
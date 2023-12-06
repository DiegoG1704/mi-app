import React,{useState} from 'react'; 
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { InputText } from "primereact/inputtext";

export default function Registro() {
    
    const [selectedDestinos, setSelectedDestinos] = useState(null);
    const Destinos = [
        { name: 'Amazonia', code: 'Az' },
        { name: 'Cañon del colca', code: 'Cl' },
        { name: 'Chiclayo', code: 'Cy' },
        { name: 'Machicchu', code: 'Mp' },
        { name: 'Huaraz', code: 'Hz' },
        { name: 'Lago Titica', code: 'Lt' },
        { name: 'Lineas de Nasca', code: 'Ln' },
        { name: 'Puerto Maldonado', code: 'Pm' },
        { name: 'Mancora', code: 'Mc' },
        { name: 'Paracas e Islas Ballestas', code: 'Pi' },
        { name: 'Montaña de Colores', code: 'Mc' }
    ];

    const [selectedIntereses, setSelectedIntereses] = useState(null);
    const Intereses = [
        { name: 'Aventura', code: 'At' },
        { name: 'Familia', code: 'Fm' },
        { name: 'Gastronomia', code: 'Gt' },
        { name: 'Historia y cultura', code: 'Hc' },
        { name: 'Naturaleza', code: 'Nz' },
        { name: 'Romanse', code: 'Rs' }
    ];

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Costa', code: 'Cs' },
        { name: 'Sierra', code: 'Sr' },
        { name: 'Selva', code: 'Sl' }
    ];



    return (
        <div className="card"  style={{width:"65%", alignItems:"center", display:"flex", flexDirection:"inherit"}}>
            
                
                    <Dropdown style={{margin:'10px', width:"20%", minWidth:"150px"}} value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                    placeholder="Regiones" className="w-full md:w-14rem" />
                
                    <MultiSelect style={{margin:'10px', width:"20%", minWidth:"150px"}} value={selectedDestinos} onChange={(e) => setSelectedDestinos(e.value)} options={Destinos} optionLabel="name" 
                    filter placeholder="Destinos" maxSelectedLabels={3} className="w-full md:w-20rem" />

                    <MultiSelect style={{margin:'10px', width:"20%", minWidth:"150px"}} value={selectedIntereses} onChange={(e) => setSelectedIntereses(e.value)} options={Intereses} optionLabel="name" 
                    filter placeholder="Intereses" maxSelectedLabels={3} className="w-full md:w-20rem" />

                    <span className="p-input-icon-left" style={{margin:'10px', width:"20%", minWidth:"150px"}}>
                        <i className="pi pi-search" />
                        <InputText placeholder="Buscar" />
                    </span>

                    <Button style={{margin:'10px', width:"20%", minWidth:"150px"}} label="Submit" icon="pi pi-check" />
                                                                                                      
        </div>
        
    )
}
        
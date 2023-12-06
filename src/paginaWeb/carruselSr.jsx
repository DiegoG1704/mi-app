import { Button } from 'primereact/button';
import Carousel from 'react-bootstrap/Carousel';
import fondo from './imagenes/fon.jpg';
import logo from './imagenes/img1.png';
import { Image } from 'react-bootstrap';

export default function Carrusel(){
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div className='carrusel' style={{width:"95%"}}>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <Image src={fondo} style={{width:"100%",height:"700px"}}/>
                            <Carousel.Caption style={{paddingBottom:'250px'}}>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <Button label="Submit" />
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={fondo} style={{width:"100%", height:"700px"}}/>
                            <Carousel.Caption style={{paddingBottom:'250px'}}>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Button label="Submit" />
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={fondo} style={{width:"100%", height:"700px"}}/>
                            <Carousel.Caption style={{paddingBottom:'250px'}}>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            <Button label="Submit" />
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
        </div>
    );
}
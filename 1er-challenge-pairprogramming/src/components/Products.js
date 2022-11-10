import React,{useState} from 'react'
import Card from './Card'

function Productos() {

    const productos = [
        { id:1, nombre: "Macbook", precio: 100000,  descripcion:"MacBook", imagen: '.\img\dorime.jpg' },
        { id:2, nombre: "Macbook", precio: 150000,  descripcion:"MacBook pro" , imagen: '.\img\dorime.jpg' },
        { id:3, nombre: "Macbook", precio: 200000,  descripcion:"MacBook pro s", imagen: '.\img\dorime.jpg'  },
    ]

    const [state, setState] = useState();
    const [fecha, setFecha] = useState();


    function btn() {
        setState(
            productos.map(produc => (
                <Card key={produc.id} nombre={produc.nombre}/>
            ))
        )
    }

    function btnFecha() {
        
        let dia = new Date();
        let ahora = dia.toLocaleString();
        setFecha(ahora)
        
    }

  return (
    <div>
        {
            productos.map(produc => (
                <Card key={produc.id} nombre={produc.nombre} precio={produc.precio} descripcion={produc.descripcion}/>
            ))
        }

        <div>
            <button onClick={btn}>Resumen de productos</button>
        </div>
        {
           state 
        }

        <button onClick={btnFecha}>HORA</button>
        
        <p>{fecha}</p>
        

    </div>
  )
}

export default Productos
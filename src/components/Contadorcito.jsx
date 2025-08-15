import { useState } from "react";


const Contador = () => {
    /*const [nombre del estado inmutable*/
    /*setContador nombre de la función que modifica el estado pero no su valor*/
    /* usetState() hook de react para modificar estados*/
const [contador,setContador] = useState(1);


const sumar=()=>{
    setContador(contador+1)
  console.log(contador)
};

    return (
        <div className="d-flex  justify-content-center">
                <div className="card border border-success">
            <h1>El contador loco</h1>
            <p className="text-success fs-1 fw-bold">{contador}</p>            
            <p><button className='btn btn-primary' onClick={sumar}>+</button>
          </p>
       </div>
        </div>
        
    );
};

export default Contador; 
import Bienvenidos from "./components/Bienvenidos"
import TeoriaComponentes from "./components/TeoriaComponentes"

function App() {
//Aqui agrego logica de js de un componente
//Para agregar estilo con class de bootstrap la sintaxis de React es className
//la palabra class esta reservada para trabajar con las clases de javascript
//React demanda cierre en las etiquetas ej: <main></main> , <main/> o fragmentos </>
//los props son objetos que se pueden añadir propiedades o metodos,react envia de forma unidireccional la informacion por eso los Props se pasan de padre a hijos

return  (<main className="container my-5">  
    <h1>Hola gozú!</h1>
   <p>second return</p>
  {/*<Bienvenidos>Comentario del html</Bienvenidos>*/}
  <Bienvenidos />
  <TeoriaComponentes comision={'Web13'}/>

</main>
  

)
  
   }

export default App

import Bienvenidos from "./components/Bienvenidos"
import TeoriaComponentes from "./components/TeoriaComponentes"
import Contadorcito from "./components/Contadorcito";


function App() {
//Aqui agrego logica de js de un componente
//Para agregar estilo con class de bootstrap la sintaxis de React es className
//la palabra class esta reservada para trabajar con las clases de javascript
//React demanda cierre en las etiquetas ej: <main></main> , <main/> o fragmentos </>
//los props son objetos que se pueden añadir propiedades o metodos,react envia de forma unidireccional la informacion por eso los Props se pasan de padre a hijos
const modulo = 2;
return  (<main className="container my-5 text-center">  
    <h1 className="text-center">♪Style Counter♥!</h1>
  {/*<Bienvenidos>Comentario del html</Bienvenidos>*/}
  <Bienvenidos />
  <TeoriaComponentes comision={'Web13'} modulo={modulo}/>
  <Contadorcito></Contadorcito>
</main>
  

)
  
   }

export default App

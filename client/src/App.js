import './App.css';
import {Route} from "react-router-dom"
import Home from './HomeCp/Home';
import Detalle_Rc from './HomeCp/Detalles_Rc/Detalles';
import Form from './HomeCp/CreacionRc/Formulario';

function App() {
  return (
     <>
    <Route path="/Home" component={Home}/>
    <Route path="/Detalles" component={Detalle_Rc} />
    <Route path="/Formulario" component={Form}/>
    </>
  );
}

export default App;

import './App.css';
import {Route} from "react-router-dom"
import Home from './HomeCp/Home';
import Detalle_Rc from './HomeCp/Detalles_Rc/Detalles';

function App() {
  return (
     <>
    <Route path="/Home" component={Home}/>
    <Route path="/Detalles" component={Detalle_Rc} />
    </>
  );
}

export default App;

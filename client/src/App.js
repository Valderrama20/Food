import './App.css';
import {Route} from "react-router-dom"
import Home from './HomeCp/Home';

function App() {
  return (
     <>
    <Route path="/Home" component={Home}/>
    <div className="App">
      <h1>Henry Food</h1>
    </div>
    </>
  );
}

export default App;

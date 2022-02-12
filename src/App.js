import { ItemListContainer } from "./components/ItemLIstContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemLIstContainer/ItemDetailContainer';
import { NavBar } from "./components/NavBar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Contacto } from "./components/Contacto";
import { Nosotros } from "./components/Nosotros";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer /> } />
        <Route path='/languages/:catId' element={ <ItemListContainer/> }/>
        <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
        <Route path='/nosotros' element={ <Nosotros /> } />
        <Route path='/contacto' element={ <Contacto /> } />
        <Route path='*' element={ <Navigate to='/'/> }/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

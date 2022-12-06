import './App.css';
import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom';
import {CompShowUsers } from './deportes/MostrarUsuarios.jsx';
import { CompCreateUser } from './deportes/CrearUsuarios.jsx';
import { CompEditUser } from './deportes/EditarUsuarios.jsx'
import { CompShowEventos } from './deportes/MostrarEventos.jsx'
import { CompCrearEvento } from './deportes/CrearEventos.jsx'
import { CompEditEvento } from './deportes/EditarEventos.jsx'
import { Logo } from './deportes/Logo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarComp} from './deportes/Nabvar.Comp.jsx'
import {Login} from './deportes/Login.jsx'
import styled from "styled-components";



function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Logo />
        
      </header>


      <BrowserRouter>
                     <Routes>
                         <Route path= '/' element= {<NavbarComp />} >                        
                              <Route path='/users' element={ <CompShowUsers />} />
                              <Route path='/create' element={ <CompCreateUser />} />
                              <Route path= '/edit/:_id' element ={ <CompEditUser />} />  
                              <Route path= '/sheventos' element = {<CompShowEventos />} />
                              <Route path= '/regevento' element = {<CompCrearEvento />} />
                              <Route path= '/editevento/:_id' element = { <CompEditEvento />} />
                              <Route path= '/login' element = { <Login />} />
                              <Route path='*' element={ <Navigate replace to="/"/> }/>
                         </Route>
                         

                        
                    </Routes>
     </BrowserRouter>


    </div>
  );
}

export default App;

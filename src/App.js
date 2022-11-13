import './App.css';

import CountryDetails from './components/CountryDetails/CountryDetails';
import CountriesList from './components/CountriesList/CountriesList';
import NavBar from './components/NavBar/NavBar';

import { Route, Routes } from 'react-router-dom'
import { useState } from "react";

import importList from './countries.json';

function App() {

  if ( window.location.pathname.slice(0,16) !== "/CountryDetails/" ) 
       window.location.href = '/CountryDetails/BRA';
  if ( window.location.pathname.length !== 19 ) 
       window.location.href = '/CountryDetails/BRA';

  const [countriesList, setListaPaises ] = useState(importList);
  const [pais, setPais ] = useState("");

  const funcaoSetPais = (novoPais) => {
    setPais(novoPais);
  }

  return (

    <div className="App" style={{ overflow: 'hidden'}}>

    <NavBar/>

    <div>
      <div className='row'>
        <div className='col-4'>
          <CountriesList countriesList={countriesList}/>
        </div>
        <div className='col-8'>
            <Routes>
              <Route 
                path="/CountryDetails/:id" 
                element={ <CountryDetails countriesList={countriesList} paisSel={pais} funcaoSetPais={funcaoSetPais} /> }
              />
            </Routes>
        </div>
      </div>
    </div>

    </div>

  );

}

export default App;

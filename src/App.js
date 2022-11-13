import './App.css';

import CountryDetails from './components/CountryDetails/CountryDetails';
import CountriesList from './components/CountriesList/CountriesList';
import NavBar from './components/NavBar/NavBar';

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// import countriesList from './countries.json';

function App() {

  const [pais, setPais ] = useState("");

  const funcaoSetPais = (novoPais) => {
    setPais(novoPais);
    // console.log("trocou o pais para: ",novopais);
  }

  window.onload = () => {
    if ( pais !== "BRA" ) window.location.href = '/CountryDetails/BRA';
  }

  return (
    <div className="App">
    <NavBar/>

    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <CountriesList/>
        </div>
        <div className='col-8'>
            <Routes>
              <Route 
                path="/CountryDetails/:id" 
                element={ <CountryDetails paisSel={pais} funcaoSetPais={funcaoSetPais} /> }                  
              />
            </Routes>
        </div>
      </div>
    </div>

    </div>

  );

}

export default App;

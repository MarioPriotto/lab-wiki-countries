import countriesList from '../../countries.json';
import { Link } from "react-router-dom";

import ListGroup from 'react-bootstrap/ListGroup';

function CountriesList() {

    const countriesListRender = 
    countriesList.map( (l) => { 
        return (            
            <ListGroup.Item>
                <Link key={l.alpha3Code} to={`/CountryDetails/${l.alpha3Code}`} style={{textDecoration: 'none'}}>
                    <img width='20%' src={`https://flagpedia.net/data/flags/icon/256x192/${l.alpha2Code.toLowerCase()}.png`} alt={l.name.common} />
                    <p>{l.name.common}</p>
                </Link>                
            </ListGroup.Item>            
        )
    });

    return (
        <>            
            <br/>
            <div style={{height: '90vh', overflow: 'scroll'}} >
                <ListGroup>
                    {countriesListRender}
                </ListGroup>
            </div>
        </>
    )
}

export default CountriesList

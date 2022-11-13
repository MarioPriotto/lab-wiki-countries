import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

function CountriesList(props) {

    const countriesListRender = 
        props.countriesList.map( (current) => { 
            return (            
            <ListGroup.Item key={current.alpha3Code} className="mx-auto" >
                <Link to={`/CountryDetails/${current.alpha3Code}`} style={{textDecoration: 'none'}}>
                    <img width='30%' src={`https://flagpedia.net/data/flags/icon/256x192/${current.alpha2Code.toLowerCase()}.png`} alt={current.name.common} />
                    <p>{current.name.common}</p>
                </Link>                
            </ListGroup.Item>            
    )});

    return (
        <>            
            <br/>
            <div style={{ height: '90vh', overflowY: 'scroll'}} >
                <ListGroup>
                    {countriesListRender}
                </ListGroup>
            </div>
        </>
    )

}

export default CountriesList

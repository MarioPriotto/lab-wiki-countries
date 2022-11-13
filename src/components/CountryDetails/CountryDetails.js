import { useParams, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function CountryDetails(props) {

    let { id } = useParams();

    const retornaObjetoPais = (pais) => {
        const objCountryFound =  props.countriesList.find( l => l.alpha3Code === pais);
        if ( !objCountryFound ) {
            window.location.href = '/CountryDetails/BRA';
            return;
        }
        return ( objCountryFound );
    }

    const montaLinhasFronteiras = (parametro,index) => {
        const paisName = retornaObjetoPais(parametro);
        return (<div key={index} className="row" style={{padding: '0px', margin: "0px"}}>
                    <div className="col-6">{ index === 0 ? "Fronteiras" : "" }</div>
                    <div className="col-6">
                        <ul style={{ listStyle: 'none', margin: "0px"}} >
                        <Link to={`/CountryDetails/${paisName.alpha3Code}`} style={{textDecoration: 'none'}}>
                        <li>{paisName.name.common}</li>
                        </Link>
                        </ul>
                    </div>
                </div>
        )
    }

    if ( id ) {        
        const countriesListRender = retornaObjetoPais(id);
        props.funcaoSetPais(id);
        return (
            <>
            <br/>
            <div className="mx-auto" style={{ width: '500px'}} >
            <Card  style={{ border: '0px'}}>            
                <Card.Img className="mx-auto" variant="top" style={{ width: '300px', textalign: 'center' }} src={`https://flagpedia.net/data/flags/icon/256x192/${countriesListRender.alpha2Code.toLowerCase()}.png`} />
            
                <Card.Body>
                    <Card.Title style={{ fontSize: '2.5rem'}}>{countriesListRender.name.common}</Card.Title>
                </Card.Body>
                <Card.Body style={{ fontSize: '1rem'}}>
                    <div className="row">
                        <div className="col-6">Capital</div>
                        <div className="col-6">{countriesListRender.capital}</div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-6">Área:</div>
                        <div className="col-6">{countriesListRender.area} km<sup>2</sup></div>
                    </div>
                    <hr/>
                    {countriesListRender.borders.map( (current,index) => ( 
                        montaLinhasFronteiras(current,index)
                    ))}
                </Card.Body>
            </Card>
            </div>
            </>
        );
    }
}

export default CountryDetails

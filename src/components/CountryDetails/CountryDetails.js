import { useParams } from 'react-router-dom'
import countriesList from '../../countries.json';

function CountryDetails(props) {
    
    const { id } = useParams();

    if ( id ) {
        const countriesListRender = countriesList.find( l => l.alpha3Code === id);
        props.funcaoSetPais(id);
        return ( <p>CONTRYDETAILS para: {id}</p> );
    // } else {
    //     props.funcaoSetPais(props.paisSel);
    //     return ( <p>RETORNO da primeira passagem para: {props.paisSel}</p> );
    }

}

export default CountryDetails


import CountriesList from '../CountriesList/CountriesList';
import CountryDetails from '../CountryDetails/CountryDetails';
import NavBar from '../NavBar/NavBar';

function HomePage() {
  return (
    <div className="Homepage">

      <NavBar/>

      <div className='container'>
        <div className='row'>
          <div className='col-5'>
            <CountriesList/>
          </div>
          <div className='col-7'>
            <CountryDetails/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;

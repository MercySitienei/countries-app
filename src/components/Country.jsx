import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Country = () => {
  const [country, setCountry] = useState(null);
  const { theme } = useContext(ThemeContext);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const country = await response.json();
        setCountry(country[0]);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    fetchCountryData();
  }, [name]);

  if (!country) {
    return <div>Loading...</div>;
  }

  const {
    cca3,
    flags,
    name: countryName,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders
  } = country;

  return (
    <div className='m-10 h-[100vh]'>
      <Link to='/'>
        <div className={`flex rounded-md px-5 py-2 justify-between items-center text-${theme === 'light' ? 'black' : 'light-txt-elem'} lg:w-[10%] md:w-[15%] w-[37%] ${theme === 'light' ? 'bg-light-txt-elem' : 'bg-dark-elements'} shadow-sm`}>
          <span><FaArrowLeft /></span>
          <span>Back</span>
        </div>
      </Link>
      <section className={`my-10 text-${theme === 'light' ? 'black' : 'light-txt-elem'}`}>
        <article className='lg:flex lg:gap-20' key={cca3}>
          <div className='lg:h-[350px] md:w-[500px] lg:w-[400px] rounded-sm'>
            <img className='lg:h-[100%] lg:w-[100%] md:w-[100%] rounded-sm' src={flags.png} alt={countryName.common} />
          </div>
          <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-2'>
            <div className='pb-8 flex flex-col gap-2'>
              <h2 className='font-[900] text-[20px] py-5'>{countryName.common}</h2>
              <h5><span className='font-bold'>Native Name: </span><span className='font-thin'>{Object.values(countryName.nativeName || {})[0]?.common || 'N/A'}</span></h5>
              <h5><span className='font-bold'>Population: </span><span className='font-thin'>{population.toLocaleString()}</span></h5>
              <h5><span className='font-bold'>Region: </span><span className='font-thin'>{region}</span></h5>
              <h5><span className='font-bold'>Sub Region: </span><span className='font-thin'>{subregion}</span></h5>
              <h5><span className='font-bold'>Capital: </span><span className='font-thin'>{capital}</span></h5>
            </div>
            <div className='pb-9 flex flex-col md:pt-[78px] lg:pt-[78px] lg:pl-20 gap-2'>
              <h5><span className='font-bold'>Top Level Domain: </span><span className='font-thin'>{tld}</span></h5>
              <h5><span className='font-bold'>Currencies: </span><span className='font-thin'>{Object.values(currencies || {})[0]?.name || 'N/A'}</span></h5>
              <h5><span className='font-bold'>Languages: </span><span className='font-thin'>{Object.values(languages || {}).join(', ')}</span></h5>
            </div>
            <div className='lg:col-start-1 lg:col-span-2 lg:flex lg:gap-4 md:col-start-1 md:col-span-2 md:flex md:gap-4'>
              <h3 className='pb-5'><span className='font-bold'>Border Countries: </span></h3>
              <div className='grid font-thin lg:flex md:flex grid-cols-3 gap-4'>
                {borders ? borders.map((border) => (
                  <ul key={border}>
                    <li className={`py-1 px-4 flex justify-center items-center ${theme === 'light' ? 'bg-light-txt-elem' : 'bg-dark-elements'} shadow-sm`}><Link to={`/countries/${border}`}>{border}</Link></li>
                  </ul>
                )) : <p>No border countries</p>}
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Country;

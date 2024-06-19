import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from 'react-router-dom';


const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
  const {theme} = useContext (ThemeContext)

  const [countries, setCountries] =useState([])
  const fetchCountryData = async() =>{
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
  }

  useEffect(()=>{
    fetchCountryData()
  }, [])

  return (
    <div className='grid grid-cols-1 gap-12 py-3 px-10 md:grid-cols-2 lg:grid-cols-4'>
      {countries.map((country)=> {
        const {cca3,name,population,region,capital,flags } = country
        return(
          <article key={cca3}>
            <div className={` h-[350px] rounded-md ${theme=== 'light' ? 'bg-light-txt-elem' : 'bg-dark-elements'} shadow-sm`}>
              <img className='rounded-md w-full h-[55%]' src={flags.png} alt={name.common} />
              <div className={` pt-6 pb-10 px-5 text-${theme=== 'light' ? '[black]' : 'light-txt-elem'}`}>
              <h3 className=' pb-4 font-bold text-lg '><Link className='country-name' to={`/countries/${name.common}`}>{name.common}</Link></h3>
              <h4 className='text-sm'>Population: <span className='font-thin'>{population.toLocaleString()}</span> </h4>
              <h4 className='text-sm'>Region: <span className='region-name font-thin'>{region}</span> </h4>
              <h4 className='text-sm'>Capital: <span className='font-thin'>{capital ? capital[0] : 'N/A'}</span> </h4>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Countries

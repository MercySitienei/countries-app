import { CiSearch } from "react-icons/ci";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";


const SearchandFilter = () => {
  const {theme} = useContext (ThemeContext)
  const [searchData, setSearchData] = useState('')
  const handleInput =(e)=>{
    setSearchData(e.target.value)
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(searchData===''){
      alert('Enter country name')
    }else{
      const countryName = document.querySelectorAll('.country-name')
      countryName.forEach((name) =>{
        if(name.innerText.toLowerCase().includes(searchData.toLowerCase())){
          name.parentElement.parentElement.parentElement.parentElement.style.display = 'block'
        }else{
          name.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
        }
      })
    }
  } 

  const handleFilter =(e)=>{
    const continent = e.target.value
    if (continent === 'Filter by region') {
      return;
    }
      const regionName = document.querySelectorAll('.region-name')
      regionName.forEach((name) =>{
        if(name.innerText.toLowerCase().includes(continent.toLowerCase())){
          name.parentElement.parentElement.parentElement.parentElement.style.display = 'block'
        }else{
          name.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
        }
      })
  } 

  return (
    <section className='flex flex-col lg:px-10 lg:flex-row  justify-between px-4 py-5'>
      <form onSubmit={handleSubmit} className={`flex items-center justify-center pl-4 w-[100%] lg:w-[30%] mb-8 ${theme=== 'light' ? 'bg-light-txt-elem' : 'bg-dark-elements'} ${theme=== 'light' ? 'text-light-input' : 'text-[white]'} shadow-sm  rounded-md`}>
        <CiSearch/>
        <input className={`p-2 ml-2 rounded-md w-full focus:outline-none text-sm  ${theme=== 'light' ? 'bg-light-txt-elem' : 'bg-dark-elements'}`} type="search" value={searchData} onChange={handleInput}  name='search' id='search' placeholder='Search for a country...' />
      </form>
      <div className={` w-[60%] lg:w-[auto] lg:h-4 ${theme=== 'light' ? 'bg-light-txt-elem' : 'bg-dark-elements'} ${theme=== 'light' ? 'text-light-input' : 'text-[white]'} shadow-sm rounded-md`}>
        <select onChange={handleFilter} className={` focus:outline-none p-2    border-none w-[180px]  ${theme=== 'light' ? 'bg-light-txt-elem' : 'bg-dark-elements'} ${theme=== 'light' ? 'text-[black]' : 'text-[white]'} shadow-sm rounded-md`} name="select" id="select">
            <option value="Filter by region">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}

export default SearchandFilter

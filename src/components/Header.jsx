
import { IoMoonOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const Header = () => {
  const {theme, toggleTheme} = useContext (ThemeContext)
  return (
    <header className={`${theme=== 'light' ? 'bg-light-txt-elem' : 'bg-dark-elements'}  shadow-sm w-full justify-between flex lg:px-10 py-5 px-4`}>
        <h1 className={`font-bold text-lg text-${theme=== 'light' ? '[black]' : 'light-txt-elem'} `}>Where in the world?</h1>
        <div className="cursor-pointer" onClick={toggleTheme}>
          {
            theme === 'light' ?
            <span className="flex items-center gap-2 text-[black] "> <IoMoonOutline/> Dark Mode </span>:
            <span className="flex items-center gap-2  text-light-txt-elem"> <CiLight /> Light Mode </span> 

          }
        </div>
    </header>
  )
}

export default Header

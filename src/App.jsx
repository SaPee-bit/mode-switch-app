import useLocalStorage from "use-local-storage"
import {Toggle} from "./components/Toggle"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Products } from "./components/Products"
import { Action } from "./components/Action"
import { Footer } from "./components/Footer"
import "./App.css"

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [isDark, setIsDark] = useLocalStorage("isDark", preference)

  // data-theme is a custom css class, jst like Id, className etc)
  return (
    
    <div className="App" data-theme={isDark ? "dark" : "light"}> 
      <div className="container row">
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </div>
      <div><Navbar/></div>
      <div><Hero/></div>
      <div><Products/></div>
      <div><Action/></div>
      <div><Footer/></div>
    </div>    
  )
}

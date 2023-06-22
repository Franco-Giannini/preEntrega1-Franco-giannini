import { Navbar } from "./components/layout/navbar/Navbar"
import Home from "./components/pages/home/home"
import ItemList from "./components/pages/home/itemList/itemList"

function App() {

  return <div>
    <Home/>
    <Navbar/>
    <ItemList/>
    <h1>Ferreteria Pepito</h1>
  </div>
}

export default App

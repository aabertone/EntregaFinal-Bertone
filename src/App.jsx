import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx'
import ItemFilterContainer from './Components/ItemFilterContainer/ItemFilterContainer.jsx'


const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/cat/:cat" element={<ItemFilterContainer/>}></Route>
        <Route path="/carrito" element={<p>Proximamente</p>}></Route>
        <Route path="/detalle/:id" element={<ItemDetailContainer/>}></Route>
      </Routes>
    </>
  )
}

export default App

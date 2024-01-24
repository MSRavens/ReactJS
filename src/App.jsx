import './App.css'
import NavBar from './components/NavBar/NavBar'
import Carrito from './components/Carrito/Carrito'
import ListaProductos from './components/ListaProductos/ListaProductos'

function App() {

  return (
    <>
      <NavBar />

      <Carrito />

      <ListaProductos bienvenida={"Estos son los productos que podes seleccionar de nuestra marca"}/>

    </>
  )
}



export default App

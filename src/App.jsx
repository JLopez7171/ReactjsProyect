
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import '../src/Navbar.css'
import '../src/CartWidget.css'
import '../src/ItemListContainer.css'
import Navbar from './components/Navbar';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <ItemListContainer greetings="Bienvenidos a CostaMusic"></ItemListContainer>
    </>
  )
}

export default App

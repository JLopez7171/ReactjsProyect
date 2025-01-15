import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import './css/Greetings.css'
import './css/Navbar.css'
import './css/CartWidget.css'
import './index.css'
import './css/Item.css'
import Navbar from './components/Navbar';
import Greetings from './components/Greetings';
import ItemListContainer from './components/ItemListContainer';


function App() {
  



  return (
    <>
    <BrowserRouter>

    <header>
      <Navbar />
    </header>

      <Routes>

        <Route path="/" element={

          <main>
          <section>
    
            <Greetings greetings="Bienvenidos a CostaMusic">          
            </Greetings>
            
            <ItemListContainer />
            
            </section>
        </main>

        }></Route>

        <Route path="/categorias/:category"></Route>

        <Route path="/item/:id"></Route>

      </Routes>
    </BrowserRouter>
    <footer>

    </footer>
    </>
  )
}

export default App

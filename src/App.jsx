import { initializeApp } from "firebase/app";
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
import ItemDetailContainer from './components/ItemDetailContainer';
import cartContext, { CartContextProvider } from './context/cartContext';
import CartContainer from './components/CartContainer';
import './css/CartContext.css'

function App() {
  



  return (
    <>
    <CartContextProvider>
      <BrowserRouter>

    <header>
      <Navbar />
    </header>

      <Routes>

        <Route path="/" element={

          <main>
          <section>
    
            <Greetings greetings="Bienvenido a CostaMusic">          
            </Greetings>
            
            <ItemListContainer />
            
            </section>
        </main>

        }></Route>

        <Route path="/categorias/:catid" element={
            <main>
            <section>
      
              <Greetings greetings="Los mejores productos de Ciudad de la Costa">          
              </Greetings>
              
              <ItemListContainer />
              
              </section>
          </main>
        }>
        </Route>

        <Route path="/item/:id" element={
          <ItemDetailContainer></ItemDetailContainer>
        }>
          
        </Route>

        <Route path="/cart" element={
          <CartContainer />
        }>
          
        </Route>



      </Routes>
      </BrowserRouter>
      </CartContextProvider>
    <footer>

    </footer>
    </>
  )
}

export default App

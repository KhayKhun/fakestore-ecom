import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import MenuItems from "./components/MenuItems";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import page404 from "./components/page404";

function App() {

  return (
      <BrowserRouter>
      <Header/>
          <Routes>
              <Route path="/" element={<Menu/>}>
                <Route path="/" element={<MenuItems/>}/>
                <Route path="cart" element={<Cart/>}/>
            </Route>
            <Route path="*" element={page404}/>
          </Routes>
        <ProductList/>
      </BrowserRouter>
    );
}

export default App;

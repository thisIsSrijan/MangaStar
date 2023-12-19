// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import {Shop} from './Pages/Shop';
import {Cart} from './Pages/Cart';
import {Product} from './Pages/Product';
import {SignUp} from './Pages/SignUp';
import {Login} from './Pages/Login';
import {Footer} from './Component/Footer/Footer';
import {ShopCategory} from './Pages/ShopCategory';
import {Success} from './Component/Success/Success';
import {Failure} from './Component/Failure/Failure';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import shonen_banner from './Component/Assets/shonen_banner.jpg'
import shojo_banner from './Component/Assets/shojo_banner.png'
import romcom_banner from './Component/Assets/romCom_banner02.png'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/shonen' element={<ShopCategory banner={shonen_banner} category={"Shonen"}/>}/>
          <Route path='/romcom' element={<ShopCategory banner={romcom_banner} category={"RomCom"}/>}/> 
          <Route path='/shojo' element={<ShopCategory banner={shojo_banner} category={"Shojo"}/>}/> 
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/failure' element={<Failure/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;

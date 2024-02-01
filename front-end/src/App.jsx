import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import ShoopPage from './Pages/Shop/ShopPage'
import BlogPage from './Pages/Blog/BlogPage'
import ContactPage from './Pages/Contact/ContactPage'
import CardPage from './Pages/Cart/CartPage'
import AuthPage from './Pages/Auth/AuthPage'
import ProductDetailsPage from './Pages/ProductDetailsPage/ProductDetailsPage'
import BlogDetailsPage from './Pages/BlogDetails/BlogDetailsPage'

function App() {

  return (

    <Routes >
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={< ShoopPage />} />
      <Route path='/blog' element={< BlogPage />} />
      <Route path='/contact' element={< ContactPage />} />
      <Route path='/cart' element={< CardPage />} />
      <Route path='/auth' element={< AuthPage />} />
      <Route path='/product/details' element={< ProductDetailsPage />} />
      <Route path='/product/:id' element={< ProductDetailsPage />} />
      <Route path='/blog/:id' element={< BlogDetailsPage />} />
    </Routes>

  )
}

export default App

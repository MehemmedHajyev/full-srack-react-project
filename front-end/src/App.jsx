import HomePage from './Pages/Home/HomePage'
// import ShoopPage from './Pages/Shop/ShopPage'
// import BlogPage from './Pages/Blog/BlogPage'
// import ContactPage from './Pages/Contact/ContactPage'
// import AuthPage from './Pages/Auth/AuthPage'
// import BlogDetailsPage from './Pages/BlogDetails/BlogDetailsPage'
// import ProductDetailsPage from './Pages/ProductDetailsPage/ProductDetailsPage'
import MainLayout from './component/Layouts/MainLayout'
// import CardPage from './Pages/Cart/CartPage'

function App() {

  return (
    <>
    <MainLayout>
    {/* <ProductDetailsPage /> */}
      <HomePage />

    </MainLayout>
      {/* <ShoopPage /> */}
      {/* <BlogPage /> */}
      {/* <ContactPage /> */}
      {/* <AuthPage /> */}
      {/* <CardPage /> */}
      {/* <BlogDetailsPage /> */}
    </>
  )
}

export default App

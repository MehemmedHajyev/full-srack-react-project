import Gallery from './Gallery/Gallery'
import './ProductDetails.css'
import ProductDetailsbredCrumb from './ProductDetailsbredCrumb/ProductDetailsbredCrumb'
import ProductInfo from './ProductInfo/ProductInfo'
import Tabs from './Tabs/Tabs'
const ProductDetails = () => {
    return (
        <section className="single-product">
            <div className="container">
                <div className="single-product-wrapper">
                    <div className="single-topbar">
                        <ProductDetailsbredCrumb />
                    </div>

                    <div className="single-content">
                        <main className="site-main">
                            <Gallery />
                            <ProductInfo />
                        </main>
                    </div>

                   <Tabs />

                </div>
            </div>
        </section>)                                             
}

export default ProductDetails
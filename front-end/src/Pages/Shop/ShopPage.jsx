import Header from '../../component/Layout/Header/Header'
import { Footer } from '../../component/Layout/Footer/Footer'
import Caragories from '../../component/Catagories/Caragories'
import Products from '../../component/Products/Products'
import Companiyya from '../../component/Companiyya/CompaingSingle'

const ShopPage = () => {
    return (
        <>
            <Header />
            <Caragories />
            <Products />
            <Companiyya />
            <Products />

            <Footer />
        </>
    )
}

export default ShopPage
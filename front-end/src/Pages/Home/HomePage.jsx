import Header from '../../component/Layout/Header/Header'
import { Footer } from '../../component/Layout/Footer/Footer'
import Slider from '../../component/Slider/Slider'
import Catagories from '../../component/Catagories/Caragories'
import Products from '../../component/Products/Products'
import Campaigns from '../../component/Campaigns/Campaigns'
import HomeinBLogs from '../../component/HomeinBLogs/HomeinBLogs'
import Brands from '../../component/Brands/Brands'
import CompaingSingle from '../../component/Companiyya/CompaingSingle'

const HomePage = () => {
    return (
        <>
            <Header />
            <Slider />
            <Catagories />
            <Campaigns />
            <Products />
            <HomeinBLogs />
            <Brands />
            <CompaingSingle />
            <Footer />
        </>
    )
}

export default HomePage
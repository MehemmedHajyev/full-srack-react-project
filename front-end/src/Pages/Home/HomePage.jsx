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
            <Slider />
            <Products />
            <Catagories />
            <Campaigns />
            <HomeinBLogs />
            <Brands />
            <CompaingSingle />
        </>
    )
}

export default HomePage
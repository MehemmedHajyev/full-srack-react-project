import { useState } from "react"
import PropTypes from 'prop-types'
import Search from "../Modals/Search/Search"
import Header from "../Header/Header"
import { Footer } from "../Footer/Footer"
const MainLayout = ({children}) => {
    const [isSearchShow, setIsSearchShow] = useState(false)
    return (
        <div className="main-layout">
            <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
            <Header setIsSearchShow={setIsSearchShow} />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout

MainLayout.propTypes = {
    children: PropTypes.node
}

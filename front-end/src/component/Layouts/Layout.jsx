import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import Search from "../Modals/Search/Search"
import Header from "../Header/Header"
import { Footer } from "../Footer/Footer"
import Dialog from "../Modals/Dialog/Dialog"
import './main-layout-scroll.css'
const Layout = (props) => {
    const [isSearchShow, setIsSearchShow] = useState(false)
    const [isDealogShow, setIsDealogShow] = useState(false)


    useEffect(() => {

        const dialogStarus = localStorage.getItem('dialog')
            ? JSON.parse(localStorage.getItem('dialog'))
            : localStorage.setItem('dialog', JSON.stringify(true))
        setTimeout(() => {
            setIsDealogShow(dialogStarus)
        }, 3000);
    }, []);
    return (
        <div className="main-layout">
            <Dialog isDealogShow={isDealogShow} setIsDealogShow={setIsDealogShow} />
            <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
            <Header isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.node
}

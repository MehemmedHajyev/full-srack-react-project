import { Footer } from "../Layout/Footer/Footer"
import Header from "../Layout/Header/Header"
import PropTypes from 'prop-types'
const MainLayout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default MainLayout

MainLayout.propTypes = {
    children: PropTypes.node
}

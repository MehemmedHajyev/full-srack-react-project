import { Footer } from "../Layout/Footer/Footer"
import Header from "../Layout/Header/Header"

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
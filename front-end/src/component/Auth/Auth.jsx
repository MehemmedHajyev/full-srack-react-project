import LoginPage from "./Login/LoginPage"
import RegisterPage from "./Register/RegisterPage"
import './Auth.css'

const Auth = () => {
    return (
        <section className="account-page">
            <div className="container">
                <div className="account-wrapper">
                    <LoginPage />
                    <RegisterPage />
                </div>
            </div>
        </section>)
}

export default Auth
import { Outlet, useLocation } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const loginHeaderFooter = location.pathname.includes('login')
    const registerHeaderFooter = location.pathname.includes('register')
    return (
        <div className="max-w-screen-lg mx-auto">
            {loginHeaderFooter || registerHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
            {loginHeaderFooter || registerHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;
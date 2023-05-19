import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Admin = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Admin;
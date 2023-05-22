import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Admin = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Admin;
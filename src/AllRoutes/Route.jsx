import { createBrowserRouter } from "react-router-dom";
import Admin from "../Layouts/Admin";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Admin></Admin>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ],
    }
])

export default AppRouter;
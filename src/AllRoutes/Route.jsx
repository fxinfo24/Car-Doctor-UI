import { createBrowserRouter } from "react-router-dom";
import Admin from "../Layouts/Admin";
import Home from "../Pages/Home/Home/Home";

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Admin></Admin>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }
        ],
    }
])

export default AppRouter;
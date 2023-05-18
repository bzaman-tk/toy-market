import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error404 from "../pages/error/Error404";
import Home from "../pages/home/Home";
import Login from "../pages/account/Login";
import Register from "../pages/account/Register";
import AddToy from "../pages/addtoy/AddToy";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'add-toy',
                element: <AddToy />
            }
        ]
    }
])

export default router;
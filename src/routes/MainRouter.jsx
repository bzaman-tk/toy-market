import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error404 from "../pages/error/Error404";
import Home from "../pages/home/Home";
import Login from "../pages/account/Login";
import Register from "../pages/account/Register";
import AddToy from "../pages/addtoy/AddToy";
import Blog from "../pages/blog/Blog";
import AllToys from "../pages/alltoys/AllToys";
import SingleToy from "../pages/singletoy/SingleToy";
import MyToys from "../pages/account/MyToys";
import PrivateRoute from "./PrivateRoute";

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
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'all-toys',
                element: <AllToys />,
                loader: () => fetch('https://toyserver-one.vercel.app/all-toys')
            },
            {
                path: 'my-toys',
                element: <PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path: 'toy/:id',
                element: <PrivateRoute><SingleToy /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toyserver-one.vercel.app/toy/${params.id}`)
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'add-toy',
                element: <PrivateRoute><AddToy /></PrivateRoute>
            }
        ]
    }
])

export default router;
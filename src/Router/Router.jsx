import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home/Home";
import LogIn from "../Home/LogIn/LogIn";
import SignUp from "../Home/Sign Up/SignUp";
import Dashboard from "../Dashboard/Dashboard";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
              },
        ]
    },
    {
        path: "dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                
            }
        ]
    }
])

export default Router;
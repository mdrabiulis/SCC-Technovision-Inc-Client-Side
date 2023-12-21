import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/"
            }
        ]
    }
])

export default Router;
import React from "react";
import  ReactDOM  from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Error from "./Components/Error";

const AppLayout = () => {
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/skills",
                element:<Skills/>,
            },
            {
                path:"/projects",
                element:<Projects />,
            },
            {
                path:"/about",
                element:<About/>,
                
            },
        ], errorElement: <Error />
    }
])



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
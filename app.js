import React from "react";
import  ReactDOM  from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Skills from "./src/Components/Skills";
import About from "./src/Components/About";
import Projects from "./src/Components/Projects";
import Error from "./src/Components/Error";

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
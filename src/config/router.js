import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
} from "react-router-dom"

import Dashboard from "../views/Dashboard"
import Detail from "../views/Detail"
import Signin from "../views/Signin"
import Homepage from "../views/Homepage"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/signin",
                element: <Signin />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/restro/:restro_id",
                element: <Detail />
            },

        ]
    }
])
function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    const navigate = useNavigate()


    return (

        <div>
            <header className="foodpanda-header">
                <div className="logo">
                    <img width={190} src="https://download.logo.wine/logo/Foodpanda/Foodpanda-Logo.wine.png" alt="Foodpanda Logo" />
                </div>

                <div>
                    <button onClick={() => navigate('/signin')} className="btn">Signup</button>
                    <button className="btnn">Restaurants</button>
                </div>

                <div >
                    <sapn> <img className="icon" width={27} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/1200px-Globe_icon.svg.png" alt="" />
                        <p className="icon-en"> EN </p> </sapn>
                </div>

            </header>

            <Outlet />
        </div>

    )
}

export default Router
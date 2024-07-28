import './App.css'
import {LoginScreen} from "./routes/LoginScreen.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainScreen} from "./routes/MainScreen.tsx";
import {Contact} from "./routes/Contact.tsx";
import {HomeScreen} from "./routes/HomeScreen.tsx";


const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginScreen />
    },
    {
        path: "/",
        element: <MainScreen/>,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact />,
            },
            {
                path: "home",
                element: <HomeScreen />,
            }
        ],
    }
])

const App = () => <RouterProvider router={router} />

export default App

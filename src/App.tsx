import './App.css'
import {LoginScreen} from "./routes/LoginScreen.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainScreen} from "./routes/MainScreen.tsx";
import {Contact} from "./routes/Contact.tsx";


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
            }
        ],
    }
])

const App = () => <RouterProvider router={router} />

export default App

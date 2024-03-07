import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Root from './Root.jsx'
import Devs from './Components/devs/Devs.jsx'
import Notes from "./Components/Notes/Notes.jsx"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route path='' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='dev' element={<Devs />} />
            <Route path='Notes' element={<Notes/>} />
        </Route>

    )
)

export default router
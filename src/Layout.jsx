import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import {Home , About , Contact , Devs,Notes, Services} from "./Components/index"
import Root from "./Root"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route path='' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='dev' element={<Devs />} />
            <Route path='Notes' element={<Notes/>} />
            <Route path="Services" element={<Services/>}/>
        </Route>

    )
)

export default router
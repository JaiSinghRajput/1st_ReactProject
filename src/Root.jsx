import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header"
import Footer from './Components/Footer/Footer'
function Root() {
  return (
    <>
      <Header />
      <div className="px-1 bg-gradient-to-r from-blue-700 to-red-500">
        <Outlet/>
      </div>
      <Footer />
    </>
  )
}

export default Root

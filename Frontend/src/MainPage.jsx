import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

const MainPage = () => {
    return (
        <div className='min-h-screen flex flex-col relative'>
            <Navbar></Navbar>
            <div className='flex-grow relative'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MainPage

// Main Pages have Navbar and footer, thats why it is split from authentication page, as it doesn't need those.
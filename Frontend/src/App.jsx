import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Book from './pages/Book'
import Discussion from './pages/Discussion'
import Events from './pages/Events'

const App = () => {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Book' element={<Book/>}></Route>
                <Route path='/Discussion' element={<Discussion/>}></Route>
                <Route path='/Events' element={<Events/>}></Route>
            </Routes>
        </>
    )
}

export default App

// Navbar: As App is being replaced with pages, it have a common navbar for every page.

// Routes: Uses Navbar to change the website url, so /Book to /Discussion, but all with App! so Navbar for App is enough in this case!


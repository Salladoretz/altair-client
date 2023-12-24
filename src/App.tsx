import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Login from './features/login'


const App = () => {
    return (
        <div className='app'>
            <Header />
            <div className='main'>
                <div className='menu'>
                </div>
                <div className='content'>
                    <Routes>
                        <Route path='login' element={<Login />} />
                        <Route path='/' element={<Home />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Login from './features/login'
import Partners from './features/partners/partners'


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
                        <Route path='/' element={<Partners />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App

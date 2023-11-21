import {
    RouterProvider,
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
  } from "react-router-dom";
import toast,{ Toaster } from 'react-hot-toast'
import ApiTransaksi from './menus/ApiTransaksi'
import Hal2 from './menus/Hal2'
import Navbar from './components/Navbar'
import { path } from './api/Value'
const Rute = () => {
    const pathApp = path()
    return (
        <div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
                toastOptions={{
                className: '',
                duration: 5000,
                // style: {
                //     background: (isDark === true) ? "#334155" : '#F8FAFC',
                //     color: (isDark === true) ? '#fff' : "#334155",
                // },
                }}
            />
            <Router>
                <Navbar />

                <Routes>
                    <Route path={ pathApp } element={<ApiTransaksi />}/>        
                    <Route path={`${pathApp}/Hal2`} element={<Hal2 />}/>        
                </Routes>
            </Router>
        </div>
    )
}

export default Rute
import { AppBar, Box, Toolbar } from '@mui/material'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import Header from './Header'
import LoginModal from '../../views/client/Home/modal/LoginModal'
import RegisterModal from '../../views/client/Home/modal/RegisterModal'
import Footer from './Footer'
import Sidebar from './Sidebar'

const pages = [
    { name: 'Artikel Kesehatan', path: '/artikel-kesehatan' },
    { name: 'Cari Dokter', path: '/cari-dokter' },
    { name: 'Ambulance', path: '/booking-ambulance' },
    { name: 'Chat Dokter', path: '/chat-dokter' },
    { name: 'Beli Obat', path: '/beli-obat' },
]

const MainLayout = ({ children }) => {
    const appBarRef = useRef(null)

    const [appBarHeight, setAppBarHeight] = useState(0)

    const updateAppBarHeight = () => {
        if (appBarRef.current) {
            setAppBarHeight(appBarRef.current.offsetHeight)
        }
    }

    useEffect(() => {
        updateAppBarHeight()
    }, [])

    const [drawer, setDrawer] = useState(false)

    const [login, setLogin] = useState(false)

    const [register, setRegister] = useState(false)

    const handleDrawer = () => setDrawer(!drawer)

    const handleModalLogin = () => {
        setRegister(false)
        setLogin(!login)
    }

    const handleModalRegister = () => {
        setLogin(false)
        setRegister(!register)
    }

    return (
        <>
            <AppBar
                ref={appBarRef}
                elevation={0}
                sx={{ bgcolor: '#FFFFFF', borderBottom: '1px #E0E0E0 solid' }}
            >
                <Toolbar>
                    <Header
                        pages={pages}
                        loginToggle={handleModalLogin}
                        drawerToggle={handleDrawer}
                    />
                </Toolbar>
            </AppBar>

            <Sidebar pages={pages} open={drawer} drawerToggle={handleDrawer} />

            <LoginModal
                open={login}
                modalToggle={handleModalLogin}
                registerToggle={handleModalRegister}
            />

            <RegisterModal
                open={register}
                modalToggle={handleModalRegister}
                loginToggle={handleModalLogin}
            />

            <Box sx={{ minHeight: '100vh', marginTop: `${appBarHeight}px` }}>
                {children}
            </Box>

            <Footer />
        </>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MainLayout

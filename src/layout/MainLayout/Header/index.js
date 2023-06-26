import PropTypes from 'prop-types'
import {
    Avatar,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from '@mui/material'
import LogoSection from '../LogoSection'
import { Link, useLocation } from 'react-router-dom'
import { Logout, Menu as MenuIcon, Person } from '@mui/icons-material'
import { useState } from 'react'

const Header = ({ pages, loginToggle, drawerToggle }) => {
    const token = sessionStorage.getItem('token') !== null

    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenUserMenu = (e) => {
        setAnchorElUser(e.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const handleLogout = () => {
        handleCloseUserMenu()
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('token')
        window.location.href = '/'
    }

    const location = useLocation()

    const isActiveLink = (path) => {
        return location.pathname === path
    }

    return (
        <Box
            sx={{ width: 1, display: 'flex', justifyContent: 'space-between' }}
        >
            <Box display="flex" alignItems="center">
                <Box display={{ xs: 'block', md: 'none' }}>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2 }}
                        onClick={drawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Box alignItems="center">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <LogoSection />
                    </Link>
                </Box>
                <Box display={{ xs: 'none', md: 'flex' }} marginLeft={4}>
                    {pages.map((page) => (
                        <Link
                            key={page.name}
                            to={page.path}
                            style={{ textDecoration: 'none' }}
                        >
                            <Typography
                                sx={{
                                    marginX: 2,
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    color: isActiveLink(page.path)
                                        ? '#d92527'
                                        : '#000000',
                                }}
                            >
                                {page.name}
                            </Typography>
                        </Link>
                    ))}
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {!token ? (
                    <Button
                        onClick={loginToggle}
                        variant="contained"
                        color="error"
                    >
                        <Typography
                            sx={{
                                color: '#FFFFFF',
                                fontSize: { xs: 10, md: 14 },
                            }}
                        >
                            LOGIN
                        </Typography>
                    </Button>
                ) : (
                    <>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar
                                alt="Avatar"
                                src="/static/images/avatar/2.jpg"
                            />
                        </IconButton>
                        <Menu
                            sx={{ mt: 5 }}
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Person />
                                    <Typography
                                        textAlign="center"
                                        marginLeft={1}
                                    >
                                        My Account
                                    </Typography>
                                </Box>
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Logout />
                                    <Typography
                                        textAlign="center"
                                        marginLeft={1}
                                    >
                                        Logout
                                    </Typography>
                                </Box>
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </Box>
        </Box>
    )
}

Header.propTypes = {
    pages: PropTypes.array,
    loginToggle: PropTypes.func,
    drawerToggle: PropTypes.func,
}

export default Header

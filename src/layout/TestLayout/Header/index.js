import PropTypes from 'prop-types'
import {
    Logout,
    Menu as MenuIcon,
    Notifications,
    Today,
} from '@mui/icons-material'
import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material'

const Header = ({ open, draweToggle }) => {
    const admin = sessionStorage.getItem('admin') !== null

    return (
        <AppBar
            position="fixed"
            open={open}
            elevation={0}
            sx={{ bgcolor: '#FFFFFF', borderBottom: '1px #e0e0e0 solid' }}
        >
            <Toolbar>
                <Box
                    sx={{
                        width: 1,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: open ? { xs: 0, md: 32 } : 0,
                        }}
                    >
                        <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={draweToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: 'flex', alignItems: 'end' }}>
                            <Today sx={{ fontSize: 24, color: '#000000' }} />
                            <Typography
                                sx={{
                                    marginLeft: 1,
                                    color: '#9e9e9e',
                                    fontSize: 14,
                                    fontWeight: 500,
                                }}
                            >
                                FRI, 23 JUN
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <IconButton
                            sx={{
                                padding: 1,
                                borderRadius: 100,
                                border: '1px #e0e0e0 solid',
                            }}
                        >
                            <Notifications
                                sx={{ fontSize: { xs: 16, md: 24 } }}
                            />
                        </IconButton>
                        {admin ? (
                            <Tooltip title="Logout">
                                <IconButton
                                    sx={{
                                        marginLeft: 1,
                                        padding: 1,
                                        borderRadius: 100,
                                        border: '1px #e0e0e0 solid',
                                    }}
                                >
                                    <Logout
                                        sx={{ fontSize: { xs: 16, md: 24 } }}
                                    />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            <IconButton sx={{ marginLeft: 1 }}>
                                <Avatar
                                    alt="Avatar-admin"
                                    src="/static/images/avatar/2.jpg"
                                    sx={{
                                        width: { xs: 34, md: 42 },
                                        height: { xs: 34, md: 42 },
                                    }}
                                />
                            </IconButton>
                        )}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    open: PropTypes.bool,
    draweToggle: PropTypes.func,
}

export default Header

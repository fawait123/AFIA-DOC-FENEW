import { Menu, Notifications, Today } from '@mui/icons-material'
import {
    AppBar,
    Box,
    CssBaseline,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material'

const TestDashboardLayout = () => {
    return (
        <Box sx={{ width: 1, display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                open={open}
                elevation={0}
                sx={{
                    width: 1,
                    bgcolor: '#FFFFFF',
                    borderBottom: '1px #e0e0e0 solid',
                }}
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
                                sx={{ mr: 2 }}
                            >
                                <Menu />
                            </IconButton>
                            <Box sx={{ display: 'flex', alignItems: 'end' }}>
                                <Today
                                    sx={{ fontSize: 24, color: '#000000' }}
                                />
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
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TestDashboardLayout

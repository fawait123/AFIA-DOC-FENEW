import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Header from './Header'
import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material'
import Sidebar from './Sidebar'

const DashboardLayout = ({ pages, children }) => {
    const [open, setOpen] = useState(true)

    const theme = useTheme()

    const isMedium = useMediaQuery(theme.breakpoints.up('md'))

    useEffect(() => {
        setOpen(isMedium)
    }, [isMedium])

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header open={open} draweToggle={handleDrawerOpen} />
            <Sidebar
                pages={pages}
                open={open}
                drawerToggle={handleDrawerClose}
            />
            <Box
                sx={{
                    width: 1,
                    bgcolor: '#eeeeee',
                    minHeight: '100vh',
                    marginLeft: open ? { xs: '-300px', md: 0 } : '-300px',
                    padding: 3,
                }}
            >
                <Box
                    sx={{
                        marginTop: { xs: 4, md: 8 },
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    )
}

DashboardLayout.propTypes = {
    pages: PropTypes.array,
    children: PropTypes.node.isRequired,
}

export default DashboardLayout

import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Header from './Header'
import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material'
import Sidebar from './SIdebar'

const TestLayout = ({ pages, children }) => {
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
                    marginLeft: open ? 0 : '-300px',
                }}
            >
                {children}
            </Box>
        </Box>
    )
}

TestLayout.propTypes = {
    pages: PropTypes.array,
    children: PropTypes.node.isRequired,
}

export default TestLayout

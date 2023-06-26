import { Close } from '@mui/icons-material'
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({ pages, open, drawerToggle }) => {
    const location = useLocation()

    const isActiveLink = (path) => {
        return location.pathname === path
    }

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={drawerToggle}
            sx={{
                width: 300,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 300,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography sx={{ fontWeight: 600 }}>Menu</Typography>
                <IconButton onClick={drawerToggle}>
                    <Close />
                </IconButton>
            </Toolbar>
            <List>
                <ListItem key="Beranda">
                    <Link
                        to="/"
                        style={{
                            width: '100%',
                            display: 'flex',
                            textDecoration: 'none',
                            color: isActiveLink('') ? '#d92527' : '#000000',
                        }}
                    >
                        <ListItemText primary="Beranda" />
                    </Link>
                </ListItem>
                {pages.map((page) => (
                    <ListItem key={page.name}>
                        <Link
                            to={page.path}
                            style={{
                                width: '100%',
                                display: 'flex',
                                textDecoration: 'none',
                                color: isActiveLink(page.path)
                                    ? '#d92527'
                                    : '#000000',
                            }}
                        >
                            <ListItemText primary={page.name} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

Sidebar.propTypes = {
    pages: PropTypes.array,
    open: PropTypes.bool,
    drawerToggle: PropTypes.func,
}

export default Sidebar

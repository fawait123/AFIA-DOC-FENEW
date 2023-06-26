import { LocationOn, MyLocation } from '@mui/icons-material'
import { IconButton, InputBase, Paper } from '@mui/material'

const LocationSelect = () => {
    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 1,
                height: 40,
                border: '1px #e0e0e0 solid',
                boxShadow: 'none',
            }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <LocationOn />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Lokasi Saya"
                inputProps={{ 'aria-label': 'lokasi saya' }}
            />
            <IconButton
                color="primary"
                sx={{ p: '10px' }}
                aria-label="location"
            >
                <MyLocation />
            </IconButton>
        </Paper>
    )
}

export default LocationSelect

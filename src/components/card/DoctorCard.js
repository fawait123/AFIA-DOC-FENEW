import PropTypes from 'prop-types'
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'

const DoctorCard = ({ image, name, specialist, button }) => {
    return (
        <Card elevation={0} sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 100, borderRadius: 1 }}
                image={
                    image ??
                    'https://mui.com/static/images/cards/live-from-space.jpg'
                }
                alt="cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography
                        component="div"
                        sx={{ fontWeight: 600, marginTop: -2 }}
                    >
                        {name ?? 'dr. Manchester United'}
                    </Typography>
                    <Typography color="text.secondary" component="div">
                        {specialist ?? 'Dokter Umum'}
                    </Typography>
                </CardContent>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}
                >
                    <Button
                        variant="contained"
                        elevation={0}
                        size="small"
                        color="error"
                        sx={{ textTransform: 'none' }}
                    >
                        {button ?? 'Buat Janji'}
                    </Button>
                </Box>
            </Box>
        </Card>
    )
}

DoctorCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    specialist: PropTypes.string,
    button: PropTypes.string,
}

export default DoctorCard

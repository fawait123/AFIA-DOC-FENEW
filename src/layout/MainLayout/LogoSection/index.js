import { Avatar, Box, Typography } from '@mui/material'
import logo from '../../../assets/images/logo.png'

const LogoSection = () => {
    return (
        <Box display="flex" alignItems="center">
            <Avatar
                src={logo}
                sx={{ width: 48, height: 48 }}
                alt="Website-logo"
            />
            <Box display="flex" alignItems="center">
                <Typography
                    variant="h6"
                    color="#e53935"
                    fontWeight={600}
                    marginRight={0.6}
                >
                    AFIA
                </Typography>
                <Typography variant="h6" color="#3f51b5" fontWeight={600}>
                    DOC
                </Typography>
            </Box>
        </Box>
    )
}

export default LogoSection

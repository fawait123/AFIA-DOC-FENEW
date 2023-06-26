import PropTypes from 'prop-types'
import { Card, CardActionArea, Typography } from '@mui/material'

const MenuCard = ({ icon, menu, padding }) => {
    return (
        <Card sx={{ bgcolor: '#fafafa' }}>
            <CardActionArea
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: { padding },
                }}
            >
                {icon}
                <Typography sx={{ fontWeight: 600, marginLeft: 2 }}>
                    {menu}
                </Typography>
            </CardActionArea>
        </Card>
    )
}

MenuCard.propTypes = {
    icon: PropTypes.node.isRequired,
    menu: PropTypes.string,
    padding: PropTypes.number,
}

export default MenuCard

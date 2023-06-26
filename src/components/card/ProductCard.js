import { Add } from '@mui/icons-material'
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import PropTypes from 'prop-types'

const ProductCard = ({ image, title, pack, price }) => {
    return (
        <Card
            variant="outlined"
            elevation={0}
            sx={{ width: { xs: 170, md: 200 } }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    src={
                        image ??
                        'https://mui.com/static/images/cards/contemplative-reptile.jpg'
                    }
                    height={140}
                />
                <CardContent>
                    <Typography
                        sx={{
                            fontSize: { xs: 16 },
                            fontWeight: 600,
                            marginBottom: { xs: 1, md: 3 },
                        }}
                    >
                        {title ?? 'title of the card'}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: 12 } }}>
                        {pack ?? 'Per strip'}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: 16 },
                            fontWeight: 700,
                            color: '#e53935',
                            marginBottom: 1,
                        }}
                    >
                        {price ?? 'Rp.20.000'}
                    </Typography>
                    <Button variant="outlined" color="error" sx={{ width: 1 }}>
                        <Add />
                        <Typography>Tambah</Typography>
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

ProductCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    pack: PropTypes.string,
    price: PropTypes.number,
}

export default ProductCard

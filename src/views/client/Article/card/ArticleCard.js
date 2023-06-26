import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import PropTypes from 'prop-types'

const ArticleCard = ({ image, title, categories, text }) => {
    return (
        <Card elevation={0} variant="outlined">
            <CardActionArea>
                <CardMedia
                    component="img"
                    src={
                        image ??
                        'https://mui.com/static/images/cards/contemplative-reptile.jpg'
                    }
                    sx={{ height: 160 }}
                />
                <CardContent>
                    <Typography>{categories ?? 'Category'}</Typography>
                    <Typography variant="h6">
                        {title ?? 'Title of Article'}
                    </Typography>
                    <Typography variant="paragraph">
                        {text ??
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, perferendis.'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

ArticleCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    categories: PropTypes.array,
    text: PropTypes.string,
}

export default ArticleCard

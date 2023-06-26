import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const ArticleCard = ({ image, category, title, article }) => {
    return (
        <Card
            elevation={0}
            sx={{ width: 1, display: 'flex', bgcolor: 'transparent' }}
        >
            <CardMedia
                component="img"
                src={
                    image ??
                    'https://mui.com/static/images/cards/contemplative-reptile.jpg'
                }
                sx={{
                    width: { xs: 120, md: 400 },
                    height: { xs: 120, md: 200 },
                    borderRadius: { xs: 7, md: 5 },
                    padding: 2,
                }}
            />
            <CardContent
                sx={{
                    width: 1,
                    borderBottom: '1px #e0e0e0 solid',
                    paddingX: 1,
                    paddingY: 2,
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: 14 },
                        fontWeight: 500,
                        color: 'blue',
                        marginBottom: 1,
                    }}
                >
                    {category ?? 'Category'}
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xs: 22 },
                        fontWeight: { xs: 600, md: 500 },
                        marginBottom: 1,
                    }}
                >
                    {title ?? 'title of the card'}
                </Typography>
                <Typography
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        marginBottom: { xs: 1, md: 3 },
                    }}
                >
                    {article ??
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum!'}
                </Typography>
            </CardContent>
        </Card>
    )
}

ArticleCard.propTypes = {
    image: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    article: PropTypes.string,
}

export default ArticleCard

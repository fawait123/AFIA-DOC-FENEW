import { Box, Button, Grid, Typography } from '@mui/material'
import MainLayout from 'layout/MainLayout'
import SearchBox from '../Home/search/SearchBox'
import ArticleCard from './card/ArticleCard'

const categories = [
    { name: 'Nutrisi' },
    { name: 'Diabetes' },
    { name: 'Jantung' },
]

const ArticlePage = () => {
    return (
        <MainLayout>
            <Box
                sx={{ paddingX: { xs: 2, md: 12 }, paddingY: { xs: 3, md: 6 } }}
            >
                <Box width={1}>
                    <SearchBox width={1} placeholder="Cari artikel..." />
                </Box>
                <Box width={1} marginY={6}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h5">Kategori</Typography>
                        <Typography
                            sx={{ color: '#d92527', cursor: 'pointer' }}
                        >
                            Lihat semua
                        </Typography>
                    </Box>
                    <Box width={1} paddingY={2} display="flex">
                        {categories.map((category) => (
                            <Button
                                key={category.name}
                                variant="outlined"
                                sx={{
                                    borderRadius: 10,
                                    fontSize: 14,
                                    color: 'black',
                                    borderColor: 'black',
                                    marginRight: 2,
                                }}
                            >
                                {category.name}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ paddingY: 4 }}>
                        <Typography variant="h5">Artikel</Typography>
                        <Grid
                            container
                            columns={{ xs: 2, md: 4 }}
                            spacing={2}
                            paddingY={3}
                        >
                            <Grid item xs={1}>
                                <ArticleCard />
                            </Grid>
                            <Grid item xs={1}>
                                <ArticleCard />
                            </Grid>
                            <Grid item xs={1}>
                                <ArticleCard />
                            </Grid>
                            <Grid item xs={1}>
                                <ArticleCard />
                            </Grid>
                            <Grid item xs={1}>
                                <ArticleCard />
                            </Grid>
                            <Grid item xs={1}>
                                <ArticleCard />
                            </Grid>
                            <Grid item xs={1}>
                                <ArticleCard />
                            </Grid>
                            <Grid item xs={1}>
                                <ArticleCard />
                            </Grid>
                            <Grid item xs={1}>
                                <ArticleCard />
                            </Grid>
                            <Grid item xs={1}>
                                <ArticleCard />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </MainLayout>
    )
}

export default ArticlePage

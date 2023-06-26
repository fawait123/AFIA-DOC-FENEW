import {
    Box,
    Card,
    CardMedia,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import MainLayout from '../../../layout/MainLayout'
import banner from '../../../assets/images/banner.jpg'
import SearchBox from './search/SearchBox'
import {
    LocalShipping,
    Medication,
    QuestionAnswer,
    Search,
} from '@mui/icons-material'
import MenuCard from '../../../components/card/MenuCard'
import ProductCard from 'components/card/ProductCard'
import ArticleCard from 'components/card/ArticleCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const menu = [
    {
        icon: (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    bgcolor: '#26c6da',
                    padding: 1,
                }}
            >
                <Search sx={{ fontSize: 20, color: 'white' }} />
            </Box>
        ),
        menu: 'Cari Dokter',
        padding: 16,
    },
    {
        icon: (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    bgcolor: '#8e24aa',
                    padding: 1,
                }}
            >
                <QuestionAnswer sx={{ fontSize: 20, color: 'white' }} />
            </Box>
        ),
        menu: 'Chat Dokter',
        padding: 16,
    },
    {
        icon: (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    bgcolor: '#f50057',
                    padding: 1,
                }}
            >
                <LocalShipping sx={{ fontSize: 20, color: 'white' }} />
            </Box>
        ),
        menu: 'Ambulance',
        padding: 16,
    },
    {
        icon: (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    bgcolor: '#ff1744',
                    padding: 1,
                }}
            >
                <Medication sx={{ fontSize: 20, color: 'white' }} />
            </Box>
        ),
        menu: 'Beli Obat',
        padding: 16,
    },
]

const HomePage = () => {
    const theme = useTheme()

    const isMed = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <MainLayout>
            <Grid
                container
                columns={12}
                sx={{
                    width: 1,
                    height: { xs: 250, md: 450 },
                    bgcolor: '#3f51b5',
                    padding: 2,
                }}
            >
                <Grid item xs={12} display={{ xs: 'block', md: 'none' }}>
                    <Typography
                        variant="h5"
                        color="#FFFFFF"
                        width={1}
                        display="flex"
                        justifyContent="center"
                        marginTop={5}
                    >
                        Konsultasi Kesehatan Anda
                    </Typography>
                    <Box width={1} bgcolor="#eeeeee">
                        <SearchBox
                            width={1}
                            size="small"
                            marginTop={3}
                            placeholder="Cari dokter..."
                        />
                    </Box>
                </Grid>
                <Grid item md={7} sx={{ height: 1 }}>
                    <Box
                        sx={{
                            width: 1,
                            height: 1,
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{ width: 'auto', marginLeft: 10 }}>
                            <Box>
                                <Typography variant="h4" color="#FFFFFF">
                                    Konsultasi Kesehatan Anda
                                </Typography>
                            </Box>
                            <Box
                                display={{ xs: 'none', md: 'block' }}
                                marginBottom={3}
                            >
                                <Typography variant="h7" color="#FFFFFF">
                                    Temukan kebutuhan untuk kesehatan pribadi
                                    disini
                                </Typography>
                            </Box>
                            <SearchBox
                                width={500}
                                marginTop={1}
                                placeholder="Cari dokter..."
                            />
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    md={4}
                    sx={{ height: 1, display: { xs: 'none', md: 'block' } }}
                >
                    <Card sx={{ width: 1, borderRadius: 3 }}>
                        <CardMedia
                            sx={{
                                height: 420,
                                width: 1,
                                backgroundPosition: 'center bottom',
                            }}
                            image={banner}
                        />
                    </Card>
                </Grid>
            </Grid>
            <Grid
                container
                columns={{ xs: 2, md: 12 }}
                spacing={{ xs: 1, md: 0 }}
                gap={{ md: 2 }}
                justifyContent="center"
                sx={{ width: 1, marginTop: 1, padding: 2 }}
            >
                {menu.map((item) => (
                    <Grid key={item.menu} item xs={1} md={2}>
                        <MenuCard
                            icon={item.icon}
                            menu={item.menu}
                            padding={item.padding}
                        />
                    </Grid>
                ))}
            </Grid>
            <Box
                width={1}
                paddingY={2}
                paddingX={{ xs: 2, md: 12 }}
                bgcolor="#fafafa"
            >
                <Box sx={{ marginBottom: 2 }}>
                    <Typography sx={{ fontWeight: 600 }}>
                        Top Products
                    </Typography>
                </Box>
                <Swiper
                    slidesPerView={isMed ? 5.4 : 2}
                    spaceBetween={isMed ? 5 : 8}
                    pagination={{
                        clickable: true,
                    }}
                >
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                </Swiper>
            </Box>
            <Box
                width={1}
                paddingY={2}
                paddingX={{ xs: 1, md: 10 }}
                marginTop={2}
            >
                <Box sx={{ paddingX: 2, paddingY: 1, marginBottom: 1 }}>
                    <Typography sx={{ fontWeight: 600 }}>Articles</Typography>
                </Box>
                <Grid container columns={1} padding={1}>
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
        </MainLayout>
    )
}

export default HomePage

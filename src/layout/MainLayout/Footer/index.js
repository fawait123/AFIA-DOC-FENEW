import { Copyright } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box sx={{ width: 1, bgcolor: '#d92527', color: 'white' }}>
            <Box
                sx={{
                    width: 1,
                    paddingTop: { xs: 2, md: 8 },
                    paddingBottom: 2,
                    paddingX: { xs: 2, md: 12 },
                }}
            >
                <Grid width={1} container columns={12} spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ fontSize: 18 }} marginY={1}>
                            Tentang Kami
                        </Typography>
                        <Typography sx={{ fontSize: 18 }} marginY={1}>
                            Hubungi Kami
                        </Typography>
                        <Typography sx={{ fontSize: 18 }} marginY={1}>
                            Syarat dan Ketentuan
                        </Typography>
                        <Typography sx={{ fontSize: 18 }} marginY={1}>
                            Kebijakan Privasi
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ fontSize: 16 }} marginY={1}>
                            Layanan Pengaduan Konsumen
                        </Typography>
                        <Typography
                            sx={{ fontSize: 14, fontWeight: 600 }}
                            marginTop={1}
                        >
                            PT Media Dokter Investama
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}>
                            Jl. H.R. Rasuna Said Kav B32-33, Jakarta Selatan
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}>
                            help@halodoc.com / 021-5095-9900
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: 1, paddingX: { xs: 0, md: 12 } }}>
                <Box
                    sx={{
                        width: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTop: '1px white solid',
                        paddingY: 2,
                    }}
                >
                    <Typography sx={{ fontSize: 14 }}>Copyright</Typography>
                    <Copyright sx={{ fontSize: 12, marginX: 0.5 }} />
                    <Typography sx={{ fontSize: 14 }}>2023</Typography>
                    <Typography sx={{ fontSize: 14, marginX: 1 }}>
                        AFIA DOC
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer

import {
    Box,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography,
} from '@mui/material'
import MainLayout from 'layout/MainLayout'
import SearchBox from '../Home/search/SearchBox'
import DoctorCard from 'components/card/DoctorCard'
import { Element } from 'react-scroll'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import LocationSelect from '../FindDoctor/select/LocationSelect'

const Ambulance = () => {
    return (
        <MainLayout>
            <Box
                sx={{
                    width: 1,
                    minHeight: '100vh',
                    display: 'flex',
                    paddingX: { xs: 1, md: 12 },
                    paddingY: { xs: 2, md: 4 },
                }}
            >
                <Grid container columns={12} spacing={2} sx={{ width: 1 }}>
                    <Grid
                        item
                        xs={0}
                        md={4.5}
                        sx={{ width: 1, display: { xs: 'none', md: 'block' } }}
                    >
                        <Box sx={{ width: 1, padding: 4 }}>
                            <LocationSelect />
                        </Box>
                        <Box
                            sx={{
                                width: 1,
                                bgcolor: '#ffffff',
                                paddingX: 4,
                                paddingY: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 1,
                                    border: '1px #e0e0e0 solid',
                                    borderRadius: 1,
                                    paddingX: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        borderBottom: '1px #e0e0e0 solid',
                                        paddingY: 1.5,
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 600 }}>
                                        Pilih Kota
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        height: 300,
                                        paddingY: 1,
                                        overflow: 'auto',
                                    }}
                                >
                                    <PerfectScrollbar>
                                        <Element
                                            name="scrollBox"
                                            className="scroll-box"
                                        >
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="semua"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel
                                                        value="lokasi"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Gunakan Lokasi Saya"
                                                    />
                                                    <FormControlLabel
                                                        value="semua"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Semua Kota"
                                                    />
                                                    <FormControlLabel
                                                        value="jakarta"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Jakarta"
                                                    />
                                                    <FormControlLabel
                                                        value="bandung"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Bandung"
                                                    />
                                                    <FormControlLabel
                                                        value="bandung"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Bandung"
                                                    />
                                                    <FormControlLabel
                                                        value="bandung"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Bandung"
                                                    />
                                                    <FormControlLabel
                                                        value="bandung"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Bandung"
                                                    />
                                                    <FormControlLabel
                                                        value="bandung"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Bandung"
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </Element>
                                    </PerfectScrollbar>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: 1,
                                bgcolor: '#ffffff',
                                paddingX: 4,
                                paddingY: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 1,
                                    border: '1px #e0e0e0 solid',
                                    borderRadius: 1,
                                    paddingX: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        borderBottom: '1px #e0e0e0 solid',
                                        paddingY: 1.5,
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 600 }}>
                                        Pilih Spesialis
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        height: 200,
                                        paddingY: 1,
                                        overflow: 'auto',
                                    }}
                                >
                                    <PerfectScrollbar>
                                        <Element
                                            name="scrollBox"
                                            className="scroll-box"
                                        >
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="semua"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel
                                                        value="lokasi"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Gunakan Lokasi Saya"
                                                    />
                                                    <FormControlLabel
                                                        value="semua"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Semua Kota"
                                                    />
                                                    <FormControlLabel
                                                        value="jakarta"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Jakarta"
                                                    />
                                                    <FormControlLabel
                                                        value="bandung"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Bandung"
                                                    />
                                                    <FormControlLabel
                                                        value="bandung"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Bandung"
                                                    />
                                                    <FormControlLabel
                                                        value="bandung"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Bandung"
                                                    />
                                                    <FormControlLabel
                                                        value="bandung"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Bandung"
                                                    />
                                                    <FormControlLabel
                                                        value="bandung"
                                                        control={
                                                            <Radio size="small" />
                                                        }
                                                        label="Bandung"
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </Element>
                                    </PerfectScrollbar>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7.5} sx={{ width: 1 }}>
                        <Box
                            sx={{
                                width: 1,
                                padding: { xs: 1, md: 4 },
                                marginLeft: { xs: 1, md: 0 },
                            }}
                        >
                            <SearchBox
                                width={1}
                                size="small"
                                placeholder="Cari ambulance..."
                            />
                        </Box>
                        <Box
                            sx={{
                                paddingX: { xs: 2, md: 4 },
                                marginTop: { xs: 1, md: 0 },
                            }}
                        >
                            <Box sx={{ height: 500 }}>
                                <PerfectScrollbar>
                                    <Element
                                        name="scrollBox"
                                        className="scroll-box"
                                    >
                                        <Grid
                                            container
                                            columns={2}
                                            spacing={2}
                                            paddingY={2}
                                            sx={{
                                                height: 1,
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <Grid item xs={2} md={2}>
                                                <DoctorCard button="Booking Ambulance" />
                                            </Grid>
                                            <Grid item xs={2} md={2}>
                                                <DoctorCard button="Booking Ambulance" />
                                            </Grid>
                                            <Grid item xs={2} md={2}>
                                                <DoctorCard button="Booking Ambulance" />
                                            </Grid>
                                            <Grid item xs={2} md={2}>
                                                <DoctorCard button="Booking Ambulance" />
                                            </Grid>
                                        </Grid>
                                    </Element>
                                </PerfectScrollbar>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </MainLayout>
    )
}

export default Ambulance

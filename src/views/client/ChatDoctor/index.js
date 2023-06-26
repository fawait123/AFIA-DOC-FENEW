import {
    Box,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from '@mui/material'
import MainLayout from 'layout/MainLayout'
import SearchBox from '../Home/search/SearchBox'
import DoctorCard from 'components/card/DoctorCard'

const ChatDoctor = () => {
    return (
        <MainLayout>
            <Box
                sx={{
                    width: 1,
                    paddingX: { xs: 2, md: 12 },
                    paddingY: { xs: 2, md: 4 },
                }}
            >
                <SearchBox
                    width={1}
                    size="small"
                    marginTop={2}
                    placeholder="Cari dokter..."
                />
            </Box>
            <Box sx={{ width: 1, paddingX: { xs: 2, md: 12 } }}>
                <Typography sx={{ fontWeight: 600 }}>Cari Jadwal</Typography>
                <Box sx={{ width: 1, display: 'flex', marginTop: 1 }}>
                    <FormControl fullWidth sx={{ marginRight: 1 }}>
                        <InputLabel
                            id="select-day-label"
                            sx={{ marginTop: -1 }}
                        >
                            Pilih Hari
                        </InputLabel>
                        <Select
                            labelId="select-day-label"
                            id="select-day"
                            label="Pilih Hari"
                            size="small"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ marginX: 1 }}>
                        <InputLabel
                            id="select-hour-label"
                            sx={{ marginTop: -1 }}
                        >
                            Pilih Jam
                        </InputLabel>
                        <Select
                            labelId="select-hour-label"
                            id="select-hour"
                            label="Pilih Jam"
                            size="small"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ marginLeft: 1 }}>
                        <InputLabel
                            id="select-specialist-label"
                            sx={{ marginTop: -1 }}
                        >
                            Spesialis
                        </InputLabel>
                        <Select
                            labelId="select-specialist-label"
                            id="select-specialist"
                            label="Spesialis"
                            size="small"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box
                sx={{
                    width: 1,
                    paddingX: { xs: 2, md: 12 },
                    paddingY: { xs: 2, md: 4 },
                }}
            >
                <Grid container columns={2} spacing={2}>
                    <Grid item xs={2} md={1}>
                        <DoctorCard button="Chat" />
                    </Grid>
                    <Grid item xs={2} md={1}>
                        <DoctorCard button="Chat" />
                    </Grid>
                    <Grid item xs={2} md={1}>
                        <DoctorCard button="Chat" />
                    </Grid>
                    <Grid item xs={2} md={1}>
                        <DoctorCard button="Chat" />
                    </Grid>
                </Grid>
            </Box>
        </MainLayout>
    )
}

export default ChatDoctor

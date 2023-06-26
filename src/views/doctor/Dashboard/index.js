import { Box, Grid, Typography } from '@mui/material'
import Doctor from '..'
import TotalPatient from './card/TotalPatient'
import TableDataGrid from 'components/table/TableDataGrid'
import { Link } from 'react-router-dom'

const columns = [
    {
        field: 'no',
        headerName: 'No',
        width: 70,
    },
    {
        field: 'nama',
        headerName: 'Nama',
        flex: 1,
    },
    {
        field: 'jam',
        headerName: 'Jam',
        flex: 1,
    },
    {
        field: 'actions',
        headerName: '',
        width: 150,
    },
]

const data = [
    {
        id: '1',
        no: '1',
        nama: 'Ahmad Fairin',
        jam: '13.00',
    },
    {
        id: '2',
        no: '2',
        nama: 'Fajirin Riki',
        jam: '13.20',
    },
    {
        id: '3',
        no: '3',
        nama: 'Ahmad Fairin',
        jam: '13.00',
    },
    {
        id: '4',
        no: '4',
        nama: 'Ahmad Fairin',
        jam: '13.00',
    },
]

const DashboardDoctor = () => {
    return (
        <Doctor>
            <Box
                sx={{
                    width: 1,
                    paddingX: { xs: 1, md: 4 },
                    paddingY: { xs: -1, md: 2 },
                    marginY: { xs: 6, md: 2 },
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ marginBottom: 3, fontSize: { xs: 24, md: 32 } }}
                >
                    Selamat datang dr. Alexander
                </Typography>
                <Grid
                    container
                    columns={3}
                    spacing={2}
                    sx={{ width: 1, marginBottom: 2 }}
                >
                    <Grid item xs={3} md={1}>
                        <TotalPatient />
                    </Grid>
                    <Grid item xs={3} md={1}>
                        <TotalPatient />
                    </Grid>
                    <Grid item xs={3} md={1}>
                        <TotalPatient />
                    </Grid>
                </Grid>
                <Grid container columns={12} spacing={2} sx={{ width: 1 }}>
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{ width: 1, bgcolor: '#fff', borderRadius: 3 }}
                        >
                            <TableDataGrid columns={columns} data={data} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'end',
                                    padding: 2,
                                }}
                            >
                                <Link to="/admin/appointment">Lihat semua</Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                width: 1,
                                height: 300,
                                bgcolor: '#fff',
                                borderRadius: 3,
                            }}
                        ></Box>
                    </Grid>
                </Grid>
            </Box>
        </Doctor>
    )
}

export default DashboardDoctor

import { Box, Typography } from '@mui/material'
import Doctor from '..'
import TableDataGrid from 'components/table/TableDataGrid'

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

const AppointmentDoctor = () => {
    return (
        <Doctor>
            <Box
                sx={{
                    width: 1,
                    bgcolor: '#fff',
                    borderRadiuis: 1,
                    padding: 4,
                    marginY: { xs: 6, md: 2 },
                }}
            >
                <Typography variant="h6">Data Appointment Pasien</Typography>
                <Box sx={{ width: 1, marginY: 3 }}>
                    <TableDataGrid data={data} columns={columns} />
                </Box>
            </Box>
        </Doctor>
    )
}

export default AppointmentDoctor

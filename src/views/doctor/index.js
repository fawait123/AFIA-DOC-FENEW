import PropTypes from 'prop-types'
import DashboardLayout from 'layout/DashboardLayout'
import {
    Apartment,
    BarChart,
    CalendarMonth,
    Chat,
    Group,
    Medication,
} from '@mui/icons-material'

const pages = [
    { name: 'Dashboard', path: '/dokter/dashboard', icon: <BarChart /> },
    { name: 'Praktek', path: '/dokter/praktek', icon: <Apartment /> },
    {
        name: 'Appointment',
        path: '/dokter/appointment',
        icon: <CalendarMonth />,
    },
    { name: 'Chat', path: '/dokter/chat', icon: <Chat /> },
    { name: 'Pasien', path: '/dokter/pasien', icon: <Group /> },
    { name: 'Stok Obat', path: '/dokter/stok-obat', icon: <Medication /> },
]
const Doctor = ({ children }) => {
    return <DashboardLayout pages={pages}>{children}</DashboardLayout>
}

Doctor.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Doctor

import PropTypes from 'prop-types'
import DashboardLayout from 'layout/DashboardLayout'
import {
    BarChart,
    FormatAlignLeft,
    Medication,
    Newspaper,
    Person,
} from '@mui/icons-material'

const pages = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <BarChart /> },
    { name: 'Spesialis', path: '/admin/spesialis', icon: <FormatAlignLeft /> },
    { name: 'Dokter', path: '/admin/dokter', icon: <Medication /> },
    { name: 'User', path: '/admin/user', icon: <Person /> },
    { name: 'Artikel', path: '/admin/artikel', icon: <Newspaper /> },
]

const Admin = ({ children }) => {
    return <DashboardLayout pages={pages}>{children}</DashboardLayout>
}

Admin.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Admin

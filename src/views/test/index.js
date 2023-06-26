import {
    BarChart,
    FormatAlignLeft,
    Medication,
    Newspaper,
    Person,
} from '@mui/icons-material'
import TestLayout from 'layout/TestLayout'

const pages = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <BarChart /> },
    { name: 'Spesialis', path: '/admin/spesialis', icon: <FormatAlignLeft /> },
    { name: 'Dokter', path: '/admin/dokter', icon: <Medication /> },
    { name: 'User', path: '/admin/user', icon: <Person /> },
    { name: 'Artikel', path: '/admin/artikel', icon: <Newspaper /> },
]

const Test = () => {
    return <TestLayout pages={pages}>Pijemin</TestLayout>
}

export default Test

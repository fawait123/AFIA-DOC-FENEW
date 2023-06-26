import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../views/client/Home'
import PrivateRoutes from './PrivateRoutes'
import DashboardAdmin from '../views/admin/Dashboard'
import SpecialistAdmin from 'views/admin/Specialist'
import DoctorAdmin from 'views/admin/Doctor'
import AddDoctor from 'views/admin/Doctor/Add'
import Test from 'views/test'
import UserAdmin from 'views/admin/User'
import ArticlePage from 'views/client/Article'
import FindDoctor from 'views/client/FindDoctor'
import ChatDoctor from 'views/client/ChatDoctor'
import DashboardDoctor from 'views/doctor/Dashboard'
import PracticeDoctor from 'views/doctor/Practice'
import AppointmentDoctor from 'views/doctor/Appointment'
import ChatForDoctor from 'views/doctor/Chat'
import PatientDoctor from 'views/doctor/Patient'
import TestDashboardLayout from 'layout/TestDashboardLayout'
import Ambulance from 'views/client/Ambulance'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/artikel-kesehatan" element={<ArticlePage />} />
                <Route path="/cari-dokter" element={<FindDoctor />} />
                <Route path="/booking-ambulance" element={<Ambulance />} />
                <Route path="/chat-dokter" element={<ChatDoctor />} />
                <Route path="/beli-obat" element={<ArticlePage />} />
                <Route path="/test" element={<Test />} />
                <Route
                    path="/test/dashboard"
                    element={<TestDashboardLayout />}
                />
                <Route
                    path="/admin/dashboard"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <DashboardAdmin />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/admin/spesialis"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <SpecialistAdmin />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/admin/dokter"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <DoctorAdmin />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/admin/dokter/tambah"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <AddDoctor />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/admin/user"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <UserAdmin />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/admin/artikel"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <DashboardAdmin />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/dokter/dashboard"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <DashboardDoctor />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/dokter/praktek"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <PracticeDoctor />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/dokter/appointment"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <AppointmentDoctor />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/dokter/chat"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <ChatForDoctor />{' '}
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/dokter/pasien"
                    element={
                        <PrivateRoutes>
                            {' '}
                            <PatientDoctor />{' '}
                        </PrivateRoutes>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes

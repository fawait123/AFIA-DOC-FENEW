import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
    const token = sessionStorage.getItem('token') !== null

    const location = useLocation

    return token ? (
        <>{children}</>
    ) : (
        <Navigate
            replace={true}
            to="/"
            state={{ from: `${location.pathname}${location.search}` }}
        />
    )
}

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoutes

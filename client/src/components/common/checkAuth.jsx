import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {

    const location = useLocation();

    if (!isAuthenticated && !(
        location.pathname.includes('/login') ||
        location.pathname.includes('/register')
    )) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />
    }

    if (isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
        if (location.state?.from?.pathname) {
            return <Navigate to={location.state.from.pathname} replace />
        }

        if (user?.role === 'admin') {
            return <Navigate to="/admin/dashboard" />
        } else {
            return <Navigate to="/shop/home" />
        }
    }

    if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('/shop')) {
        return <Navigate to="/admin/dashboard" />
    }

    if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('/admin')) {
        return <Navigate to="/unauth-page" />
    }

    return (
        children
    )
}

export default CheckAuth;

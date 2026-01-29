import {Outlet} from "react-router-dom";

function AuthLayout(){
    return (
        <div className="bg-container">
            <div className="card-container">
                <h1 className="auth-heading"> Welcome to Ecommerce Shopping</h1>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout;
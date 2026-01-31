import { Link } from "react-router-dom"
import { useState } from "react"
import CommonForm from "../../components/common/form";
import { loginFormControls } from "../../config";

const initialState = {
    email: "",
    password: ""
}

function AuthLogin() {

    const [formData, setFormData] = useState(initialState);

    function onSubmit(){

    }

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">

                <h1 className="text-2xl font-bold tracking-tight text-foreground">Login</h1>
                <p className="mt-2">Don't have an Account
                    <Link className="font-medium text-primary hover:underlined ml-2" to="/auth/register">Register</Link>
                </p>
            </div>
            <CommonForm
                formControl={loginFormControls}
                buttonText={'Login'}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}

            />
        </div>
    )
}

export default AuthLogin;
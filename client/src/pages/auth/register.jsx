import { Link } from "react-router-dom"
import { useState } from "react"
import CommonForm from "../../components/common/form";

const initialState = {
    userName: "",
    email: "",
    password: ""
}

function AuthRegister() {

    const [FormData, setFormData] = useState(initialState);

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">

                <h1 className="text-2xl font-bold tracking-tight text-foreground">Create a New Account</h1>
                <p className="mt-2">Already have an Account
                    <Link className="font-medium text-primary hover:underlined ml-2" to="/auth/login">Login</Link>
                </p>
            </div>
            <CommonForm
                formControls={registerFormControls}

            />
        </div>
    )
}

export default AuthRegister;
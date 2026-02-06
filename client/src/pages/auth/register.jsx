import { Link } from "react-router-dom"
import { useState } from "react"
import CommonForm from "../../components/common/form";
import { registerFormControls } from "../../config/index.jsx";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const initialState = {
    userName: "",
    email: "",
    password: ""
}

function AuthRegister() {

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function onSubmit(event) {
        event.preventDefault();
        dispatch(registerUser(formData)).then((data) => {
            if (data?.payload.success) {
                toast(data?.payload?.message);
                navigate("/auth/login");
            }
            else {
                toast.error(data?.payload?.message);
            }
        })
    }
    console.log(formData);

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">

                <h1 className="text-2xl font-bold tracking-tight text-foreground">Create a New Account</h1>
                <p className="mt-2">Already have an Account
                    <Link className="font-medium text-primary hover:underlined ml-2" to="/auth/login">Login</Link>
                </p>
            </div>
            <CommonForm
                formControl={registerFormControls}
                buttonText={'Create Account'}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}

            />
        </div>
    )
}

export default AuthRegister;
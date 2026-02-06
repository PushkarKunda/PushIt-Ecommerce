import { LayoutDashboard, ShoppingBasket, ShoppingCart } from "lucide-react"

export const registerFormControls = [
    {
        name: "userName",
        label: "User Name",
        type: "text",
        placeholder: "Enter User Name",
        componentType: "input"
    },
    {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter Your Email",
        componentType: "email"
    },
    {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter Your Password",
        componentType: "password"
    }
]

export const loginFormControls = [
    {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter Your Email",
        componentType: "email"
    },
    {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter Your Password",
        componentType: "password"
    }
]

export const adminSideBarMenu = [
    {
        id: "dashboard",
        label: "Dashboard",
        path: "/admin/dashboard",
        icons: <LayoutDashboard />
    },
    {
        id: "products",
        label: "Products",
        path: "/admin/products",
        icons: <ShoppingBasket />
    },
    {
        id: "orders",
        label: "Orders",
        path: "/admin/orders",
        icons: <ShoppingCart />
    }
]
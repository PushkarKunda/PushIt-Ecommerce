import { Fragment } from "react";
import { CircleUser } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { adminSideBarMenu } from "../../config/index.jsx";


function MenuItems() {
    const navigate = useNavigate();

    return <nav className="mt-8 flex-col flex gap-2">
        {
            adminSideBarMenu.map(menuItem => <div
                key={menuItem.id}
                onClick={() => navigate(menuItem.path)}
                className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
                {menuItem.icons}
                <span className="text-xl font-medium">{menuItem.label}</span>
            </div>)
        }
    </nav>
}

function AdminSideBar() {

    const navigate = useNavigate();


    return (
        <Fragment>
            <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
                <div onClick={() => navigate("/admin/dashboard")} className="flex cursor-pointer items-center gap-2">
                    <CircleUser size={30} />
                    <h1 className="text-xl font-extrabold">Admin Panel</h1>
                </div>
                <MenuItems />
            </aside>
        </Fragment>
    )
}

export default AdminSideBar;

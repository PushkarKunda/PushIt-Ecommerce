import { Outlet } from "react-router-dom";
import AdminHeader from "./header";
import AdminSideBar from "./sideBar";
function AdminLayout() {
    return (
        <div className={"bg-contaienr"}>
            <AdminSideBar />
            <div className={"card-container"}>
                <AdminHeader />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout;
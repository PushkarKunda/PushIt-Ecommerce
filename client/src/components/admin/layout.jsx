import { Outlet } from "react-router-dom";
import AdminHeader from "./header";
import AdminSideBar from "./sideBar";
import { useState } from "react";
function AdminLayout() {

    const [open, setOpen] = useState(false);
    return (
        <div className="flex min-h-screen w-full">
            <AdminSideBar open={open} setOpen={setOpen} />
            <div className="flex flex-1 flex-col">
                <AdminHeader setOpen={setOpen} />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout;
import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

function ShoppingLayout() {
    return (
        <div className="bg-container">
            <ShoppingHeader />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default ShoppingLayout;
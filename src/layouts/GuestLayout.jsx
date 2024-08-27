import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";

export default function GuestLayout() {
    return (
        <>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Navbar />
                    <div className="container lg:mx-auto sm:mx-5">
                        <Outlet />
                    </div>
                </div>
                <Drawer />
            </div>

        </>
    )
}
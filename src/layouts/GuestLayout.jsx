import { Outlet } from "react-router-dom";

export default function GuestLayout() {
    return (
        <div className="container mx-5 md:mx-auto">
            <Outlet />
        </div>
    )
}
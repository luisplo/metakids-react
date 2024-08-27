import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Drawer from "../components/Drawer";

export default function GuestLayout({ children }) {
    return (
        <>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Navbar />
                    <div className="container mx-auto">
                        {children}
                    </div>
                </div>
                <Drawer />
            </div>
            <Footer />
        </>
    )
}
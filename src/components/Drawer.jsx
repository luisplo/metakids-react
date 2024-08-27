import { Link } from "react-router-dom";

export default function Drawer() {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-xl ">
                <li><Link to={`/activities`}>Actividades</Link></li>
                <li><Link to={`/rewards`}>Recompensas</Link></li>
                <li><Link to={`/penalties`}>Penalidades</Link></li>
            </ul>
        </div>
    )
}
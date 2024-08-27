export default function Drawer() {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-xl ">
                <li><a href="/">Actividades</a></li>
                <li><a href="/">Recompensas</a></li>
                <li><a href="/">Penalidades</a></li>
            </ul>
        </div>
    )
}
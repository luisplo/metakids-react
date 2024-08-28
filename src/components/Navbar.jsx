import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [theme, setTheme] = useState('')
    const [sun, setSun] = useState('')
    const [moon, setMoon] = useState('')
    const [isdark, setIsdark] = useState(
        JSON.parse(localStorage.getItem('isdark'))
    );

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) {
            setTheme('light')
            setSun('swap-off')
            setMoon('swap-on')
        } else {
            setTheme('dark')
            setSun('swap-on')
            setMoon('swap-off')
        }
        console.log(theme)
        localStorage.setItem('isdark', JSON.stringify(isdark));
    }, [isdark]);

    return (
        <div className="navbar bg-base-100 shadow-md mb-20">
            <div className="flex-none">
                <label
                    htmlFor="my-drawer"
                    className="btn btn-square btn-ghost drawer-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
            </div>
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" to={`/`}>Metakids</Link>
            </div>
            <div className="flex-none gap-2">
                <label className="swap swap-rotate">
                    <input type="checkbox" className="theme-controller" value={theme} checked={isdark} onChange={() => setIsdark(!isdark)} />

                    <HiSun className={`${sun} h-10 w-10 fill-current`} />
                    <HiMoon className={`${moon} h-10 w-10 fill-current`} />

                </label>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link className="justify-between" to={`/profile`}>Profile</Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
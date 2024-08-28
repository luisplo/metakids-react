import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase'
import { toast } from "react-toastify";
import { useAuthDispatch } from "../context/AuthContext";

export default function AuthLayout() {
    const navigate = useNavigate()
    const dispatch = useAuthDispatch()

    function exit() {
        signOut(auth)
            .then(() => {
                dispatch({
                    type: 'signout',
                })
                navigate("/sign/in")
            })
            .catch(error => {
                toast.error('Ha ocurrido un error, ' + error.code)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                dispatch({
                    type: 'signin',
                    user: user,
                    auth: true
                })
            } else {
                exit()
            }
        })
    }, [])

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Navbar />
                <div className="container mx-5 md:mx-auto">
                    <Outlet />
                </div>
            </div>
            <Drawer />
        </div>
    )
}
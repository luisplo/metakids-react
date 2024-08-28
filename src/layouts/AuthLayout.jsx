import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase'
import { toast } from "react-toastify";
import { useAuth, useAuthDispatch } from "../context/AuthContext";

export default function AuthLayout() {
    const navigate = useNavigate()
    const dispatch = useAuthDispatch()
    const user = useAuth()

    function exit() {
        signOut(auth)
            .then(() => {
                dispatch({
                    type: 'signout',
                })
                navigate("/auth/login")
            })
            .catch(error => {
                toast.error('Ha ocurrido un error, ' + error.code)
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                dispatch({
                    type: 'signin',
                    user: currentUser,
                    auth: true
                })
            } else {
                exit()
            }
        })
        return () => unsubscribe();
    }, [])

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Navbar />
                <div className="container mx-5 md:mx-auto">
                    {user.auth &&
                        <Outlet />
                    }
                </div>
            </div>
            <Drawer />
        </div>
    )
}
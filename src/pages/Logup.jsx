import { HiMail, HiKey } from "react-icons/hi";
import { HiOutlineTrophy, HiUser } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { useAuthDispatch } from "../context/AuthContext";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
import { toast } from "react-toastify";

export default function LogUp() {
    const dispatch = useAuthDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleOnSubmit() {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                dispatch({
                    type: 'signin',
                    user: userCredential.user,
                    auth: true
                })
                toast.success('Registrado correctamente')
                navigate('/')
            })
            .catch(error => {
                toast.error('Ha ocurrido un error, ' + error.code)
            })
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="card card-side bg-base-500 shadow-2xl">
                <figure className="text-9xl ml-10">
                    <HiOutlineTrophy />
                </figure>
                <div className="card-body flex gap-6">
                    <h2 className="card-title my-5 font-bold text-3xl">Sign Up</h2>
                    <label className="input input-bordered flex items-center gap-2">
                        <HiMail />
                        <input type="text" className="grow" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <HiKey />
                        <input type="password" className="grow" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <p>
                        ¿Ya estás registrado? <Link className="font-bold" to={`/sign/in`}>Ingresa aquí.</Link>
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleOnSubmit}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
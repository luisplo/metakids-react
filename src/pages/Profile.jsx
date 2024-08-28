import { useEffect, useState } from "react"
import { HiMail, HiUser } from "react-icons/hi"
import { HiMiniPaperAirplane } from "react-icons/hi2"
import { useAuth } from "../context/AuthContext"
import { sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth"
import { toast } from "react-toastify"
import { auth } from '../../firebase'

export default function Profile() {
    const { user } = useAuth()
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')

    useEffect(() => {
        setEmail(user.email)
        setFullName(user.displayName ?? '')
    }, [])

    function handleOnSubmit() {
        updateProfile(auth.currentUser, {
            displayName: fullName,
        }).then(() => {
            toast.success('Actualizado con éxito.')
        }).catch(error => {
            toast.error('Ha ocurrido un error, ' + error.code)
        })
    }

    function verifyEmail() {
        sendEmailVerification(auth.currentUser).then(() => {
            toast.success('Mensaje envíado.')
        }).catch(error => {
            toast.error('Ha ocurrido un error, ' + error.code)
        })
    }

    function resetPassword() {
        sendPasswordResetEmail(auth.currentUser).then(() => {
            toast.success('Mensaje envíado.')
        }).catch(error => {
            toast.error('Ha ocurrido un error, ' + error.code)
        })
    }

    return (
        <div className="flex justify-center ">
            <div className="card bg-base-500 shadow-2xl w-2/3">
                <div className="card-body flex gap-6">
                    <h2 className="card-title my-5 font-bold text-3xl">Perfil</h2>
                    <label className="input input-bordered flex items-center gap-2">
                        <HiMail />
                        <input type="text" className="grow" disabled placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <HiUser />
                        <input type="text" className="grow" placeholder="Nombre completo" value={fullName} onChange={e => setFullName(e.target.value)} />
                    </label>
                    {
                        user.emailVerified ?
                            <>
                                <p className="text-error">Su email no ha sido verificado.</p>
                                <button className="btn btn-base" onClick={verifyEmail}><HiMiniPaperAirplane /> Enviar mensaje de verificación.</button>
                            </>
                            :
                            <>
                                <button className="btn btn-base" onClick={resetPassword}><HiMiniPaperAirplane />Recuperar o cambiar la contraseña.</button>
                            </>
                    }
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleOnSubmit}>Guardar</button>
                        <button className="btn btn-secondary" onClick={handleOnSubmit}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
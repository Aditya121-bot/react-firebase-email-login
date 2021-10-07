import React, { useRef } from 'react'
import swal from 'sweetalert'
import { auth } from '../firebase';
import './Signin.css'


const Signin = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
            swal({
                user
            })
        }).catch(err => {
            console.log(err)
        })
    }
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
            swal({
                err,
                title: "Error...",
                text: "código: 'auth/invalid-email', mensaje: 'La dirección de correo electrónico o la contraseña tiene un formato incorrecto'.",
                icon: "warning",
                button: "Aceptar",
            })
            
        })
    }
    return (
        <div className="signin">
            <form action="">
                <h1>Sign in</h1>
                <input ref={emailRef} type="email" />
                <input ref={passwordRef} type="password" />
                <button onClick={signIn}>Sign in </button>
                <h6>Not yet register? <span onClick={signUp} className="signin__link">Sign up</span></h6>
            </form>
        </div>
    )
}

export default Signin

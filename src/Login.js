import React, { useState } from 'react';
import './Login.css';
import { auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const loginToApp = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(cred => {
                dispatch(login({
                    email: cred.user.email,
                    uid: cred.user.uid,
                    displayName: cred.user.displayName,
                    profileUrl: cred.user.photoURL,
                }));
            }).catch(error => alert(error.message));
    };

    const register = () => {
        if (!name || !email || !password) {
            return alert("Please fill up the required fields");
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(cred => {
                updateProfile(cred.user, {
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: cred.user.email,
                            uid: cred.user.uid,
                            displayName: name,
                            photoURL: profilePic
                        }));
                    })
                    .catch(err => {
                        alert(err.message);
                    })
            })
    };

    return (
        <div className='login'>
            <img src='https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png' alt='the icon' />
            <form>
                <input type='text' value={name} onChange={e => { setName(e.target.value); }} placeholder='Full name (required if registered)' />
                <input type='text' value={profilePic} onChange={e => { setProfilePic(e.target.value); }} placeholder='Profile picture Url (optional)' />
                <input type='text' value={email} onChange={e => { setEmail(e.target.value) }} placeholder='email' />
                <input type='password' value={password} onChange={e => { setPassword(e.target.value) }} placeholder='password' />
                <button type='submit' onClick={loginToApp}>Sign in</button>
            </form>
            <p>Not a member? {" "}
                <span onClick={register} className='login__register'>Register Now</span>
            </p>
        </div>
    )
}

export default Login;
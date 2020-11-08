import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    
    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://cdn.vox-cdn.com/thumbor/U5ZBT72oETXcQigaLiPRepYuT08=/0x0:2560x1600/1120x0/filters:focal(0x0:2560x1600):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19779111/e2bfa93fb1b77cffcd517d7c4f4fe4e8.jpg" alt=""/>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <button onClick={register} className='login__registerButton'>Create your Chargers Account</button>
            </div>
        </div>
    )
}

export default Login;

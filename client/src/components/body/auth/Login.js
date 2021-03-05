import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'
import { dispatchLogin } from '../../../redux/actions/authAction'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

function Login() {
    const [user, setUser] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()

    const { email, password, err, success } = user

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value, err: '', success: '' })
    }


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/user/login', { email, password })
            setUser({ ...user, err: '', success: res.data.msg })

            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push("/")

        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }

    const responseGoogle = async (response) => {
        try {
            const res = await axios.post('/user/google_login', { tokenId: response.tokenId })

            setUser({ ...user, error: '', success: res.data.msg })
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/')
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }

    const responseFacebook = async (response) => {
        try {
            const { accessToken, userID } = response
            const res = await axios.post('/user/facebook_login', { accessToken, userID })

            setUser({ ...user, error: '', success: res.data.msg })
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/')
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }

    return (
        <div className="main">
            <div className="login_page">
                <h2>Log in to your account</h2>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" style={{ color: '#8898aa' }}>Email Address</label>
                        <input type="text" placeholder="Enter email address" id="email"
                            value={email} name="email" onChange={handleChangeInput} />

                    </div>

                    <div>
                        <label htmlFor="password" style={{ color: '#8898aa' }}>Password</label>
                        <input type="password" placeholder="Enter password" id="password"
                            value={password} name="password" onChange={handleChangeInput} />
                    </div>

                    <div className="row">
                        <button type="submit" className="bob-on-hover">Sign in</button>
                        <Link className="hr" to="/forgot_password">Forgot your password?</Link>
                    </div>
                </form>
                <br />
                <hr style={{
                    width: '100%',
                    border: '0',
                    height: '1px',
                    background: '#CBD3DC'
                }} />
                <div className="hr" style={{ textAlign: 'center', color: '#15202B', margin: '20px' }}>Or Login With</div>

                <div className="social">
                    <GoogleLogin
                        clientId="852456839018-6uvv8kqfdt8m0r5e866oob2d45jqaruq.apps.googleusercontent.com"
                        buttonText="Login with google"
                        onSuccess={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                    <FacebookLogin
                        appId="837195527044338"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                    />

                </div>

                <p className="hr">Don't have an account? <Link to="/register" style={{ color: '#4294FF' }}>Register</Link></p>
            </div>
        </div>
    )
}

export default Login

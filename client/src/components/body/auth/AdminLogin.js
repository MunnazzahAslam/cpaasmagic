import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'
import { dispatchLogin } from '../../../redux/actions/authAction'
import { useDispatch } from 'react-redux'


const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

function AdminLogin() {
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
            history.push("/home")
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
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin

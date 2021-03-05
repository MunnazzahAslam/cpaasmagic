import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'
import { isEmpty, isEmail, isLength, isMatch } from '../../utils/validation/Validation'


const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
    company: '',
    phoneno: '',
    err: '',
    success: ''
}

function Register() {
    const [user, setUser] = useState(initialState)

    const { name, email, password, cf_password, company, phoneno, err, success } = user

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value, err: '', success: '' })
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if (isEmpty(name) || isEmpty(company) || isEmpty(phoneno) || isEmpty(password))
            return setUser({ ...user, err: "Please fill in all fields.", success: '' })

        if (!isEmail(email))
            return setUser({ ...user, err: "Invalid emails.", success: '' })

        if (isLength(password))
            return setUser({ ...user, err: "Password must be at least 6 characters.", success: '' })

        if (!isMatch(password, cf_password))
            return setUser({ ...user, err: "Password did not match.", success: '' })

        try {
            const res = await axios.post('/user/register', {
                name, email, password, company, phoneno
            })

            setUser({ ...user, err: '', success: res.data.msg })
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }

    return (
        <div className="main">
            <div className="login_page reg_page">
                <h2>Get Started!</h2>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label><br />
                        {/*<input style={{ width: '49%', margin: '3px' }} type="text" placeholder="Enter your first name" id="lastname"
                            value={firstname} name="firstname" onChange={handleChangeInput} />
                        <input style={{ width: '49%' }} type="text" placeholder="Enter your last name" id="lastname"
                        value={lastname} name="lastname" onChange={handleChangeInput} /> */}
                        <input type="text" placeholder="Enter your name" id="name"
                            value={name} name="name" onChange={handleChangeInput} />
                    </div>

                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" placeholder="Enter your email address" id="email"
                            value={email} name="email" onChange={handleChangeInput} />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter password" id="password"
                            value={password} name="password" onChange={handleChangeInput} />
                    </div>

                    <div>
                        <label htmlFor="cf_password">Confirm Password</label>
                        <input type="password" placeholder="Confirm password" id="cf_password"
                            value={cf_password} name="cf_password" onChange={handleChangeInput} />
                    </div>

                    <div>
                        <label htmlFor="company">Company</label>
                        <input type="company" placeholder="Enter your Company" id="company"
                            value={company} name="company" onChange={handleChangeInput} />
                    </div>

                    <div>
                        <label htmlFor="phoneno">Phone Number</label>
                        <input type="phoneno" placeholder="Enter your Phone number" id="phoneno"
                            value={phoneno} name="phoneno" onChange={handleChangeInput} />
                    </div>

                    <div className="row">
                        <button type="submit" className="bob-on-hover">Register</button>
                    </div>
                </form>
                <p className="merge">Already have an account? <Link className="hr" style={{ color: '#5e72e4' }} to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register

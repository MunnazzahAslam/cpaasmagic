import React, { useState } from 'react'
import axios from 'axios'
import { isEmail } from '../../utils/validation/Validation'
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'

const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword() {
    const [data, setData] = useState(initialState)

    const { email, err, success } = data

    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value, err: '', success: '' })
    }

    const forgotPassword = async () => {
        if (!isEmail(email))
            return setData({ ...data, err: 'Invalid emails.', success: '' })

        try {
            const res = await axios.post('/user/forgot', { email })

            return setData({ ...data, err: '', success: res.data.msg })
        } catch (err) {
            err.response.data.msg && setData({ ...data, err: err.response.data.msg, success: '' })
        }
    }

    return (
        <div className="main">
            <div className="fg_pass">
                <h2>Recover Your Password</h2>

                <div className="row">
                    {err && showErrMsg(err)}
                    {success && showSuccessMsg(success)}
                    <input type="email" name="email" id="email" value={email}
                        onChange={handleChangeInput} placeholder="Enter your email address" />
                    <br /><br />
                    <button className="center bob-on-hover" onClick={forgotPassword} >Verify your email</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword

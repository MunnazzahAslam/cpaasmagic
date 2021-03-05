import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
//import {Link} from 'react-router-dom'
import { isLength, isMatch } from '../../utils/validation/Validation'
import { showSuccessMsg, showErrMsg } from '../../utils/notification/Notification'
import { fetchAllUsers, dispatchGetAllUsers } from '../../../redux/actions/usersAction'

const initialState = {
    name:'',
    lastname: '',
    password: '',
    cf_password: '',
    company: '',
    phoneno: '',
    err: '',
    success: ''
}

function Profile() {
    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)

    const users = useSelector(state => state.users)

    const { user, isAdmin } = auth
    const [data, setData] = useState(initialState)
    const { name, lastname, password, cf_password, company, phoneno, err, success } = data

    const [avatar, setAvatar] = useState(false)
    const [loading, setLoading] = useState(false)
    const [callback, setCallback] = useState(false)

    const dispatch = useDispatch()
    
    useEffect(() => {
        if (isAdmin) {
            fetchAllUsers(token).then(res => {
                dispatch(dispatchGetAllUsers(res))
            })
            console.log(setCallback);
        }
    }, [token, isAdmin, dispatch, callback])

    const handleChange = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value, err: '', success: '' })
    }

    const updateInfor = () => {
        try {
            axios.patch('/user/update', {
                name: name ? name : user.name,
                lastname: lastname ? lastname : user.lastname,
                phoneno: phoneno ? phoneno : user.phoneno,
                company: company ? company : user.company,
                avatar: avatar ? avatar : user.avatar
            }, {
                headers: { Authorization: token }
            })

            setData({ ...data, err: '', success: "Updated Success!" })
        } catch (err) {
            setData({ ...data, err: err.response.data.msg, success: '' })
        }
    }

    const updatePassword = () => {
        if (isLength(password))
            return setData({ ...data, err: "Password must be at least 6 characters.", success: '' })

        if (!isMatch(password, cf_password))
            return setData({ ...data, err: "Password did not match.", success: '' })

        try {
            axios.post('/user/reset', { password }, {
                headers: { Authorization: token }
            })

            setData({ ...data, err: '', success: "Updated Success!" })
        } catch (err) {
            setData({ ...data, err: err.response.data.msg, success: '' })
        }
    }

    const handleUpdate = () => {
        if (name || lastname || company || phoneno) updateInfor()
        if (password) updatePassword()
    }
    return (
        <>
            <h2 style={{ textAlign: 'center',marginTop:'3rem' }}>Hello user, update your Profile</h2>
            <br />
            <div>
                        {err && showErrMsg(err)}
                        {success && showSuccessMsg(success)}
                        {loading && <h3>Loading.....</h3>}
            </div>
            <div className="main">
                <div className="profile">
                    <div className="avatar">
                        <img src={avatar ? avatar : user.avatar} alt="" />
                    </div>
                </div>
                <br />
                <div className="profile_page login_page">
                   
                    <div className="col-left">
                        {/* <h2 style={{color:'#3D4F58'}}>{isAdmin ? "Admin Profile": "Update your Profile"}</h2> */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="input" type="text" name="name" id="name" defaultValue={user.name}
                                placeholder="Your name" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="right">Email</label>
                            <input className="input" type="email" name="email" id="email" defaultValue={user.email}
                                placeholder="Your email address" disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <input className="input" type="company" placeholder="Enter your Company" id="company"
                                defaultValue={user.company} name="company" onChange={handleChange} />
                            <label htmlFor="phoneno">Phone Number</label>
                            <input className="input" type="phoneno" placeholder="Enter your Phone number" id="phoneno"
                                defaultValue={user.phoneno} name="phoneno" onChange={handleChange} />
                        </div>

                        <button className="bob-on-hover" disabled={loading} onClick={handleUpdate}>Update</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile

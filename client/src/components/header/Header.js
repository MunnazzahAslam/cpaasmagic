import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import logo from './logo.png';
import { Button } from '../../globalStyles';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
} from './Navbar.elements';
const Header = () => {
    const auth = useSelector(state => state.auth)

    const { user, isLogged } = auth

    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else
            setButton(true)
    }
    useEffect(() => {
        showButton()
    }, [])
    window.addEventListener('resize', showButton)

    const userLink = () => {
        return <ul>
            <li className="drop-nav">
                <Link to="#" className="avatar">
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', transform: 'translateY(1.3rem)' }}>
                    <img src={user.avatar} alt="" /><i className="fas fa-angle-down"></i>
                    <p style={{color:'#fff'}}>{user.name}</p>
                    </div>
                </Link>
                <ul className="dropdown">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                    <br />
                </ul>
            </li>
        </ul>
    }

    const userLoggedNav = () => {
        return <>
            <>
                <NavLogo to="/home" onClick={handleClick}>
                    <img src={logo} className="logo" />
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes color="#fff" /> : <FaBars color="#fff" />}
                </MobileIcon>
                {/*                    <a href="/search"><TextField style={{ margin: '20px !imporant' }} id="outlined-search" type="search" variant="outlined" InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <SearchIcon />
                                                        </InputAdornment>
                                                    ),
                                                }} /></a>
                                            */}
            </>
            <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                    <NavLinks to="/sellerdashboard">
                        Seller Dashboard
                        </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/">
                        Offerings
                        </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/resources">
                        Resources
                        </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/">
                        Pricing
                        </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/">
                        About
                        </NavLinks>
                </NavItem>
            </NavMenu>
        </>
    }

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <>
                        {
                            isLogged
                                ? userLoggedNav()
                                :
                                <>
                                    <NavLogo to="/home" onClick={handleClick}>
                                        <img src={logo} className="logo" />
                                    </NavLogo>
                                    <MobileIcon onClick={handleClick}>
                                        {click ? <FaTimes color="#fff" /> : <FaBars color="#fff" />}
                                    </MobileIcon>
                                    {/*                    <a href="/search"><TextField style={{ margin: '20px !imporant' }} id="outlined-search" type="search" variant="outlined" InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <SearchIcon />
                                                        </InputAdornment>
                                                    ),
                                                }} /></a>
                                            */}
                                </>
                        }
                    </>
                    <>
                        {
                            isLogged
                                ? userLink()
                                : <>
                                    <NavMenu onClick={handleClick} click={click}>
                                        <NavItem>
                                            <NavLinks to="/">
                                                Offerings
                        </NavLinks>
                                        </NavItem>
                                        <NavItem>
                                            <NavLinks to="/resources">
                                                Resources
                        </NavLinks>
                                        </NavItem>
                                        <NavItem>
                                            <NavLinks to="/">
                                                Pricing
                        </NavLinks>
                                        </NavItem>
                                        <NavItem>
                                            <NavLinks to="/">
                                                About
                        </NavLinks>
                                        </NavItem>
                                        <NavItemBtn>
                                            <NavBtnLink to="/register">
                                                <Button style={{padding:'8px', fontSize:'1rem'}}>Sign Up</Button>
                                            </NavBtnLink>
                                        </NavItemBtn>
                                        <NavItem>
                                            <NavLinks to="/login">
                                                Login
                                            </NavLinks>
                                        </NavItem>
                                    </NavMenu>
                                </>
                        }
                    </>

                    {/*<NavLogo to="/" onClick={handleClick}>
                            <img alt="logo" className="logo" src={logo} />
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes color="#1D217E" /> : <FaBars color="#1D217E" />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">
                                    Offerings
                        </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/services">
                                    Resources
                        </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/pricing">
                                    Pricing
                        </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/about">
                                    About
                        </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/login">
                                    Login
                        </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/register">
                                        <Button primary>Sign Up</Button>
                                    </NavBtnLink>
                                ) : (
                                        <NavBtnLink to="/register">
                                            <Button onClick={showButton} fontBig primary>Sign Up</Button>
                                        </NavBtnLink>
                                    )}
                            </NavItemBtn>
                        </NavMenu>
                                */}

                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default Header
/*import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import logo from './transformxlogo.png'
function Header() {
  const auth = useSelector(state => state.auth)
    const { user, isLogged } = auth
    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }
    const userLink = () => {
        return <ul>
            <li className="drop-nav">
                <Link to="#" className="avatar">
                    <img src={user.avatar} alt="" /><i className="fas fa-angle-down"></i>
                </Link>
                <ul className="dropdown">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                    <br />
                </ul>
            </li>
        </ul>
    }
    const userLoggedNav = () => {
        return <ul >
            <div>
                <a href="/" ><img alt="logo" className="logo" src={logo} /></a>
                <a href="/search"><TextField style={{ margin:'20px !imporant' }} id="outlined-search" type="search" variant="outlined" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }} /></a>
            }
            </div>
            <li><Link to="/vendors" style={{ padding: '8px', margin: '8px' }}>Vendors</Link></li>
            <li><Link to="/apis" style={{ padding: '8px', margin: '8px' }}>APIs</Link></li>
            <li><Link to="/usecases" style={{ padding: '8px', margin: '8px' }}>Use Cases</Link></li>
            <li><Link to="/userstories" style={{ padding: '8px', margin: '8px' }}>Success Stories</Link></li>
            }
        </ul>
    }
    const transForm = {
        transform: isLogged ? "translateY(-5px)" : 0
    }
    return (
        <header>
            {/* <ul style={transForm} >
                {
                    isLogged
                        ? userLoggedNav()
                        :
                        <ul >
                            <div>
                                <a href="/" ><img alt="logo" className="logo" src={logo} /></a>
                                <a href="/search"><TextField style={{ margin:'20px !imporant' }} id="outlined-search" type="search" variant="outlined" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }} /></a>
                            </div>
                        </ul >
                }
            </ul>
            <ul>
                {
                    isLogged
                        ? userLink()
                        : <li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                }
            </ul>
        </header >
    )
}
*/
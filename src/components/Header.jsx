import classes from '../styles/Header.module.css'
import { GrLogout } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
import { AiFillMoon } from "react-icons/ai";
import { AiFillSun } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../store/themeSlice';
import { getClassName } from '../getStyleFromTheme';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";


export default function Header() {
    const navigate = useNavigate()

    const [user, setUser] = useState()
    const [isLeaveButtonVisible, setIsLeaveButtonVisible] = useState(false)

    const theme = useSelector(value => value.theme.theme)
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false)

    function getStyle() {
        if (isOpen) return ({ transform: "translateX(0)" })
        return {};
    }

    function changeThemeHandler() {
        dispatch(changeTheme())
    }

    useEffect(() => {
        const getUser = localStorage.getItem('react-shop/currentUser')

        if (!getUser) return

        const currentUser = JSON.parse(localStorage.getItem(`react-shop/${getUser}`))
        setUser(currentUser)
    }, [])

    function leaveFromAccount() {
        if (!confirm('Вы действительно хотите выйти с аккаунта?')) return
        localStorage.removeItem('react-shop/currentUser')
        navigate('/')
        location.reload()
    }

    return (
        <header id='header' className={getClassName('wrapper', theme, classes)}>
            <div className={getClassName('container', theme, classes)}>
                <div className={getClassName('burger', theme, classes)} onClick={() => setIsOpen(prev => !isOpen)}>
                    <span />
                </div>

                <h1 className={getClassName('title', theme, classes)}>
                    React Shop
                </h1>

                <nav className={getClassName('nav', theme, classes)} style={getStyle()}>
                    <ul className={getClassName('list', theme, classes)}>
                        <Link to='/'><li className={getClassName('li', theme, classes)}>Home</li></Link>
                        <Link to='/products'><li className={getClassName('li', theme, classes)}>Products</li></Link>
                        <Link to='/cart'><li className={getClassName('li', theme, classes)}>Cart</li></Link>
                    </ul>
                </nav>

                <ul className={getClassName('buttons', theme, classes)}>
                    {!user && <Link to='/login'><li className={getClassName('button', theme, classes)}><GrLogout />Login</li></Link>}
                    {!user && <Link to='/signup'><li className={getClassName('button', theme, classes)}><VscAccount />Sign Up</li></Link>}
                    {user && (<Link><li onClick={() => setIsLeaveButtonVisible(prev => !prev)} className={getClassName('button', theme, classes)}>
                        <FaRegUserCircle />{user.firstName.length > 17 ? user.firstName.slice(0, 17) + '...' : user.firstName}
                        <div onClick={(event) => {event.stopPropagation(); event.preventDefault(); leaveFromAccount()}} className={`${getClassName('leave', theme, classes)} ${isLeaveButtonVisible ? classes.visible : ''}`}>Leave</div>
                    </li></Link>)}
                    <li className={`${getClassName('button', theme, classes)} ${classes.theme}`} onClick={changeThemeHandler}>
                        {theme === true ? <AiFillSun /> : <AiFillMoon />}
                    </li>
                </ul>
            </div>
        </header>
    )
}
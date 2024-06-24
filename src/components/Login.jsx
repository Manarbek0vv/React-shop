import { useSelector } from 'react-redux'
import classes from '../styles/Login.module.css'
import { getClassName } from '../getStyleFromTheme'
import { useNavigate } from 'react-router-dom'
import { useEmail } from '../hooks/useEmail'
import { usePassword } from '../hooks/usePassword'

export default function Login() {
    const navigate = useNavigate()
    const theme = useSelector(value => value.theme.theme)

    const email = useEmail('')
    const password = usePassword('')

    function onSubmit() {
        if (email.value.length === 0) {alert('Введите данные'); return}

        const getUser = JSON.parse(localStorage.getItem(`react-shop/${email.value}`))

        if (!getUser) {alert('Данная электронная почта не авторизована на сайте'); return}
        if (getUser.password !== password.value) {alert('Неправильный пароль'); return}

        localStorage.setItem(`react-shop/currentUser`, getUser.email)
        navigate('/')
        location.reload()
    }

    return (
        <div className={getClassName('wrapper', theme, classes)}>
            <div className={classes.container}>
                <div className={getClassName('inner', theme, classes)}>
                    <h1 className={getClassName('title', theme, classes)}>Login</h1>

                    <form className={getClassName('form', theme, classes)}>
                        <label className={classes.label}>
                            <p className={getClassName('text', theme, classes)}>Email Address</p>
                            <input {...email} type="text" className={getClassName('input', theme, classes)} />
                        </label>
                        <label className={classes.label}>
                            <p className={getClassName('text', theme, classes)}>Password</p>
                            <input {...password} type="text" className={getClassName('input', theme, classes)} />
                        </label>
                    </form>

                    <div className={classes.buttons}>
                        <button onClick={onSubmit} className={classes.signup + ' ' + classes.button}>Login</button>
                        <button onClick={() => navigate('/signup')} className={classes.login + ' ' + classes.button}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
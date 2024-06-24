import { useSelector } from 'react-redux'
import { getClassName } from '../getStyleFromTheme'
import classes from '../styles/SignUp.module.css'
import { useInput } from '../hooks/useInput'
import { useNavigate } from 'react-router-dom'
import { useName } from '../hooks/useName'
import { useEmail } from '../hooks/useEmail'
import { usePassword } from '../hooks/usePassword'

export default function SignUp() {
    const navigate = useNavigate()
    const theme = useSelector(value => value.theme.theme)

    const firstName = useName('')
    const lastName = useName('')
    const email = useEmail('')
    const password = usePassword('')

    function onSubmit() {
        if (firstName.value.length < 2) {alert('Short first name'); return}
        if (lastName.value.length < 2) {alert('Short last name'); return}
        
        if (!(email.value.endsWith('@mail.ru') || (email.value.endsWith('@gmail.com')))) {
            alert('Incorrect mail')
            return
        }
        if (password.value.length < 6) {alert('Short password'); return}

        const newUser = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            cart: []
        }

        localStorage.setItem(`react-shop/${newUser.email}`, JSON.stringify(newUser))
        localStorage.setItem('react-shop/currentUser', newUser.email)

        navigate('/')
        location.reload()
    }

    return (
        <div className={getClassName('wrapper', theme, classes)}>
            <div className={classes.container}>
                <div className={getClassName('inner', theme, classes)}>
                    <h1 className={getClassName('title', theme, classes)}>Sign Up</h1>

                    <form className={getClassName('form', theme, classes)}>
                        <label className={classes.label}>
                            <p className={getClassName('text', theme, classes)}>First Name</p>
                            <input type="text" className={getClassName('input', theme, classes)} {...firstName} />
                        </label>
                        <label className={classes.label}>
                            <p className={getClassName('text', theme, classes)}>Last Name</p>
                            <input type="text" className={getClassName('input', theme, classes)} {...lastName} />
                        </label>
                        <label className={classes.label}>
                            <p className={getClassName('text', theme, classes)}>Email Address</p>
                            <input type="text" className={getClassName('input', theme, classes)} {...email} />
                        </label>
                        <label className={classes.label}>
                            <p className={getClassName('text', theme, classes)}>Password</p>
                            <input type="text" className={getClassName('input', theme, classes)} {...password} />
                        </label>
                    </form>

                    <div className={classes.buttons}>
                        <button onClick={onSubmit} className={classes.signup + ' ' + classes.button}>Sign Up</button>
                        <button onClick={() => navigate('/login')} className={classes.login + ' ' + classes.button}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
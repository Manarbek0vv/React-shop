import { useSelector } from 'react-redux'
import classes from '../styles/Main.module.css'
import { getClassName } from '../../../getStyleFromTheme'
import { useNavigate } from 'react-router-dom'

export default function Main() {
    const navigate = useNavigate()
    const theme = useSelector(value => value.theme.theme)

    return (
        <div className={getClassName('main', theme, classes)}>
            <div className={getClassName('container', theme, classes)}>
                <div className={getClassName('main__info', theme, classes)}>
                    <h1 className={getClassName('title', theme, classes)}>
                        Make your Outfit <span className={classes.wonderful}>wonderful</span>
                    </h1>
                    <p className={getClassName('paragraph', theme, classes)}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, odio
                        impedit voluptate sequi aut error ipsa nihil sapiente, fuga illo
                        nisi tempora distinctio, dignissimos aliquam.
                    </p>
                    <div className={getClassName('buttons', theme, classes)}>
                        <button className={classes['purple__button']} onClick={() => navigate('/products')}>Start shopping</button>
                        <button className={classes['black__button']}>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
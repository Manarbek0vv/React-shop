import { useSelector } from 'react-redux'
import { getClassName } from '../../../getStyleFromTheme'
import classes from '../styles/OneMessage.module.css'

export default function OneMessage() {
    const theme = useSelector(value => value.theme.theme)

    return (
        <div className={getClassName('message', theme, classes)}>
            <div className={getClassName('container', theme, classes)}>
                <div className={getClassName('message__info', theme, classes)}>
                    <h6 className={getClassName('title', theme, classes)}>
                        How Simple works
                    </h6>
                    <p className={getClassName('paragraph', theme, classes)}>
                        Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur excepteur sint occaecat cupidatat.
                    </p>
                </div>
            </div>
        </div>
    )
}
import { useSelector } from 'react-redux'
import classes from '../styles/Solutions.module.css'
import { getClassName } from '../../../getStyleFromTheme'
import { FaBoltLightning } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { IoMoon } from "react-icons/io5";


export default function Solutions() {
    const theme = useSelector(value => value.theme.theme)

    return (
        <div className={getClassName('solutions', theme, classes)}>
            <div className={getClassName('container', theme, classes)}>
                <div className={classes['solutions__info']}>
                    <div className={classes['title__wrapper']}>
                        <h5 className={getClassName('title__title', theme, classes)}>Explore the solutions</h5>
                        <p className={getClassName('title__paragraph', theme, classes)}>
                            Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur excepteur sint occaecat cupidatat.
                        </p>
                    </div>

                    <div className={classes['solutions__wrapper']}>
                        <div className={classes['solutions__inner']}>
                            <div className={getClassName('first__block', theme, classes)}>
                                <h6 className={getClassName('first__block__title', theme, classes)}>Powerful suite of tools</h6>
                                <p className={getClassName('block__paragraph', theme, classes)}>
                                    Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore pariatur.
                                    Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa.
                                </p>

                            </div>

                            <div className={getClassName('second__block', theme, classes)}>
                                <div className={classes['second__block__info']}>
                                    <h6 className={getClassName('second__block__title', theme, classes)}>Simple shoping ecosystem</h6>
                                    <p className={getClassName('block__paragraph', theme, classes)}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi beatae reprehenderit accusantium.
                                    </p>
                                </div>
                                <div className={getClassName('icon', theme, classes)}>
                                    <FaBoltLightning />
                                </div>
                            </div>

                            <div className={getClassName('third__block', theme, classes)}>
                                <div className={classes['third__block__info']}>
                                    <h6 className={getClassName('third__block__title', theme, classes)}>Simple shoping ecosystem</h6>
                                    <p className={getClassName('block__paragraph', theme, classes)}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi beatae reprehenderit accusantium.
                                    </p>
                                </div>
                                <div className={getClassName('icon', theme, classes)}>
                                    <BiLogoTelegram />
                                </div>
                            </div>

                            <div className={getClassName('third__block', theme, classes)}>
                                <div className={classes['third__block__info']}>
                                    <h6 className={getClassName('third__block__title', theme, classes)}>Simple shoping ecosystem</h6>
                                    <p className={getClassName('block__paragraph', theme, classes)}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi beatae reprehenderit accusantium.
                                    </p>
                                </div>
                                <div className={getClassName('icon', theme, classes)}>
                                    <IoMoon />
                                </div>
                            </div>
                        </div>
                        <img src="/illustration.svg" alt="" className={classes.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}
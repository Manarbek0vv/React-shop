import { useSelector } from 'react-redux'
import classes from '../styles/Footer.module.css'
import { getClassName } from '../../../getStyleFromTheme'
import { FaArrowRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
    const theme = useSelector(value => value.theme.theme)

    return (
        <div className={getClassName('footer', theme, classes)}>
            <div className={getClassName('container', theme, classes)}>
                <div className={getClassName('footer__info', theme, classes)}>
                    <hr />

                    <div className={getClassName('main', theme, classes)}>
                        <h6 className={getClassName('alone', theme, classes)}>
                            <span className={classes.link}>Terms</span>
                            <span className={classes.link}> Privacy Policy</span>
                        </h6>

                        <div className={getClassName('parts', theme, classes)}>

                            <div className={getClassName('part', theme, classes)}>
                                <h6 className={getClassName('part__title', theme, classes)}>
                                    Products
                                </h6>
                                <p className={getClassName('part__text', theme, classes)}>
                                    DynamicBox Flex
                                </p>
                                <p className={getClassName('part__text', theme, classes)}>
                                    Programming Forms
                                </p>
                                <p className={getClassName('part__text', theme, classes)}>
                                    Integrations
                                </p>
                                <p className={getClassName('part__text', theme, classes)}>
                                    Command-line
                                </p>
                                <p className={getClassName('part__text', theme, classes)}>
                                    Web Studio
                                </p>
                            </div>



                            <div className={getClassName('part', theme, classes)}>
                                <h6 className={getClassName('part__title', theme, classes)}>
                                    Resourses
                                </h6>
                                <p className={getClassName('part__text', theme, classes)}>
                                    Documentation
                                </p>
                                <p className={getClassName('part__text', theme, classes)}>
                                    Tutorials & Guides
                                </p>
                                <p className={getClassName('part__text', theme, classes)}>
                                    Blog
                                </p>
                                <p className={getClassName('part__text', theme, classes)}>
                                    Support Center
                                </p>
                                <p className={getClassName('part__text', theme, classes)}>
                                    Partners
                                </p>
                            </div>



                            <div className={getClassName('part', theme, classes)}>
                                <h6 className={getClassName('part__title', theme, classes)}>
                                    Company
                                </h6>
                                <p className={getClassName('part__text', theme, classes)}>
                                    Home
                                </p>
                                <p className={getClassName('part__text', theme, classes)}>
                                    About us
                                </p>
                                <p className={getClassName('part__text', theme, classes)}>
                                    Company values
                                </p>
                                <p className={getClassName('part__text', theme, classes)}>
                                    Prising
                                </p>
                                <p className={getClassName('part__text', theme, classes)}>
                                    Privacy Policy
                                </p>
                            </div>



                            <div className={getClassName('part', theme, classes)}>
                                <h6 className={getClassName('part__title', theme, classes)}>
                                    Subscribe
                                </h6>
                                <p className={getClassName('part__text', theme, classes)}>
                                    Get the latest news and articles to your inbox every month.
                                </p>
                                <div className={getClassName('input__wrapper', theme, classes)}>
                                    <input type='email' placeholder='Your email' className={getClassName('input', theme, classes)} />
                                    <FaArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className={getClassName('end', theme, classes)}>
                        <h5 className={getClassName('madeby', theme, classes)}>
                            Made with <FaHeart /> by <span>Manarbekov</span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
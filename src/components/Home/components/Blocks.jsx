import { getClassName } from '../../../getStyleFromTheme'
import classes from '../styles/Blocks.module.css'
import { CiAirportSign1 } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCreditCardOff } from "react-icons/ci";
import { CiMemoPad } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from 'react-redux';

export default function Blocks() {
    const theme = useSelector(value => value.theme.theme)

    return (
        <div className={getClassName('blocks', theme, classes)}>
            <div className={getClassName('container', theme, classes)}>
                <div className={getClassName('blocks__info', theme, classes)}>
                    <div className={getClassName('block', theme, classes)}>
                        <CiAirportSign1 />
                        <h4 className={getClassName('title', theme, classes)}>
                            Initial Contact
                        </h4>
                        <p className={getClassName('paragraph', theme, classes)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className={getClassName('block', theme, classes)}>
                        <CiBank />
                        <h4 className={getClassName('title', theme, classes)}>
                            Discovery Session
                        </h4>
                        <p className={getClassName('paragraph', theme, classes)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className={getClassName('block', theme, classes)}>
                        <CiBullhorn />
                        <h4 className={getClassName('title', theme, classes)}>
                            Contracting
                        </h4>
                        <p className={getClassName('paragraph', theme, classes)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className={getClassName('block', theme, classes)}>
                        <CiCreditCardOff />
                        <h4 className={getClassName('title', theme, classes)}>
                            Fast Prototyping
                        </h4>
                        <p className={getClassName('paragraph', theme, classes)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className={getClassName('block', theme, classes)}>
                        <CiMemoPad />
                        <h4 className={getClassName('title', theme, classes)}>
                            Design Phase
                        </h4>
                        <p className={getClassName('paragraph', theme, classes)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className={getClassName('block', theme, classes)}>
                        <CiShoppingCart />
                        <h4 className={getClassName('title', theme, classes)}>
                            Develop & Listing for sale
                        </h4>
                        <p className={getClassName('paragraph', theme, classes)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
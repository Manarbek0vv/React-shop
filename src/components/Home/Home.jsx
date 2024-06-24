import classes from '../../styles/Home.module.css'
import Blocks from './components/Blocks'
import Main from './components/Main'
import OneMessage from './components/OneMessage'
import Solutions from './components/Solutions'

export default function Home() {


    return (
        <div className={classes.home}>
            <Main />
            <Solutions />
            <OneMessage />
            <Blocks />
        </div>
    )
}
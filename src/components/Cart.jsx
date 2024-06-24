import { useSelector } from 'react-redux'
import classes from '../styles/Cart.module.css'
import { getClassName } from '../getStyleFromTheme'
import { useEffect, useState } from 'react'
import { getFormattedNumber } from '../getFormattedNumber'


export default function Cart() {
    const theme = useSelector(value => value.theme.theme)
    const [user, setUser] = useState()

    console.log(user?.cart)

    useEffect(() => {
        const currentUser = localStorage.getItem('react-shop/currentUser')
        if (!currentUser) return
        const getUser = JSON.parse(localStorage.getItem(`react-shop/${currentUser}`))

        setUser(getUser)
    }, [])

    useEffect(() => {
        if (!user) return
        localStorage.setItem(`react-shop/${user.email}`, JSON.stringify(user))
    }, [user])

    function increment(id, count) {
        if (count === 99) return
        setUser({...user, cart: user.cart.map(product => product.id === id ? {...product, count: product.count + 1} : product)})
    }

    function dicrement(id, count) {
        if (count === 1) return
        setUser({...user, cart: user.cart.map(product => product.id === id ? {...product, count: product.count - 1} : product)})
    }

    function removeProduct(id) {
        setUser({...user, cart: user.cart.filter(product => product.id !== id)})
    }

    const totalPrice = !user ? 0 :
    user.cart.reduce((acc, product) => acc + (product.price * product.count), 0)

    return (
        <div className={getClassName('wrapper', theme, classes)}>
            <div className={classes.container}>
                <h1 className={getClassName('title', theme, classes)}>Shopping Cart</h1>

                <div className={getClassName('inner', theme, classes)}>
                    <div className={classes.products}>
                        {user?.cart.map(product => {
                            return (
                                <div key={product.id} className={classes.product}>
                                    <div className={classes.first}>
                                        <img className={classes.img}
                                            src={typeof product.images === 'string' ? (JSON.parse(product.images))[0] : product.images} alt="" />

                                        <div className={classes.info}>
                                            <h3 className={getClassName('name', theme, classes)}>{product.title}</h3>
                                            <p className={getClassName('price', theme, classes)}>${getFormattedNumber(product.price * product.count)}</p>
                                        </div>
                                    </div>

                                    <div className={classes.buttons}>
                                        <button onClick={() => removeProduct(product.id)} className={getClassName('remove', theme, classes)}>Remove</button>

                                        <button onClick={() => dicrement(product.id, product.count)} 
                                        className={getClassName(product.count === 1 ? 'disabled': 'button', theme, classes)}>-</button>

                                        <p className={getClassName('count', theme, classes)}>{product.count}</p>

                                        <button onClick={() => increment(product.id, product.count)} className={getClassName('button', theme, classes)}>+</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <h2 className={getClassName('total', theme, classes)}>Total: ${getFormattedNumber(totalPrice)}</h2>

                    <button className={getClassName('checkout', theme, classes)}>Checkout</button>
                </div>
            </div>
        </div>
    )
}
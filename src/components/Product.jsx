import { useSelector } from 'react-redux'
import { getClassName } from '../getStyleFromTheme'
import classes from '../styles/Product.module.css'
import { getFormattedNumber } from '../getFormattedNumber'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Product({ images, title, description, category, price, id, product, user, setUser }) {
    const navigate = useNavigate()
    const [ inCart, setInCart ] = useState(false)
    const theme = useSelector(value => value.theme.theme)

    const image = typeof images === 'string' ? (JSON.parse(images))[0] : images
    const abbreviatedDescription = description.slice(0, 25) + ' ...'

    function productInteractions() {
        if (!user) {
            if (confirm('Авторизуйтесь на сайте')) {navigate('/login'); return}
            return
        }

        if (!inCart) {
            setUser({...user, cart: [...user.cart, {...product, count: 1}]})
            setInCart(true)
        } else {
            {setUser({...user, cart: user.cart.filter(elem => elem.id !== product.id)}); setInCart(false)}
        }
    }

    useEffect(() => {
        if (!user) return
        localStorage.setItem(`react-shop/${user.email}`, JSON.stringify(user))
    }, [user])

    useEffect(() => {
        if (user?.cart.find(elem => elem.id === product.id)) setInCart(true)
        else {setInCart(false)}
    }, [])

    return (
        <div className={getClassName('product', theme, classes)}>
            <img onClick={() => navigate('/products/' + id)} src={image} alt="" className={classes.img} />

            <div className={getClassName('content', theme, classes)}>
                <h5 className={getClassName('title', theme, classes)} onClick={() => navigate('/products/' + id)}>{title}</h5>
                <p className={getClassName('description', theme, classes)}>
                    {abbreviatedDescription} <span onClick={() => navigate('/products/' + id)} 
                    className={getClassName('readmore', theme, classes)}>Read More</span>
                </p>
                <h5 className={getClassName('category', theme, classes)}>{category.name}</h5>
            </div>

            <div className={getClassName('info', theme, classes)}>
                    <div className={getClassName('price__wrapper', theme, classes)}>
                        <p className={getClassName('price__text', theme, classes)}>Price</p>
                        <p className={getClassName('price', theme, classes)}>${getFormattedNumber(price)}</p>
                    </div>

                    <button onClick={productInteractions} className={getClassName('button', theme, classes)}>
                        {!inCart && 'Add To Cart'}
                        {inCart && 'Remove From Cart'}
                    </button>
                </div>
        </div>
    )
}
import { useSelector } from 'react-redux'
import { getClassName } from '../getStyleFromTheme'
import classes from '../styles/ProductInfo.module.css'
import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../store/productApi'
import { useEffect, useState } from 'react'
import { getFormattedNumber } from '../getFormattedNumber'
import { FaAngleLeft } from "react-icons/fa6";

export default function ProductInfo() {
    const [user, setUser] = useState()
    const [inCart, setInCart] = useState(false)
    const { id } = useParams()
    const theme = useSelector(value => value.theme.theme)

    const { data = {}, isError, isLoading } = useGetProductQuery(id)

    const [currentImage, setCurrentImage] = useState(0)

    function onChangeImage(index) {
        setCurrentImage(index)
    }

    function productInteractions() {
        if (!user) {
            if (confirm('Авторизуйтесь на сайте')) { navigate('/login'); return }
            return
        }

        if (!inCart) {
            console.log(1)
            setUser({ ...user, cart: [...user.cart, { ...data, count: 1 }] })
            setInCart(true)
        } else {
            { setUser({ ...user, cart: user.cart.filter(elem => elem.id !== data.id) }); setInCart(false) }
        }
    }

    useEffect(() => {
        if (!user) return
        localStorage.setItem(`react-shop/${user.firstName}`, JSON.stringify(user))
    }, [user])

    useEffect(() => {
        if (user?.cart.find(elem => elem.id === product.id)) setInCart(true)
        else setInCart(false)
    }, [])

    useEffect(() => {
        const currentUser = localStorage.getItem('react-shop/currentUser')
        if (!currentUser) return
        const getUser = JSON.parse(localStorage.getItem(`react-shop/${currentUser}`))

        setUser(getUser)
    }, [])

    return (
        <div className={getClassName('wrapper', theme, classes)}>
            <div className={getClassName('container', theme, classes)}>
                <div className={getClassName('inner', theme, classes)}>
                    <div className={classes.images}>
                        {data.images && [0, 1, 2].map((elem) => {
                            const image = typeof (data.images) === 'string' ?
                                ((JSON.parse(data.images))[elem] || '') :
                                (data.images[elem] || '');

                            return (
                                <div key={elem} style={elem === currentImage ? { opacity: '40%' } : {}}
                                    className={getClassName('image__wrapper', theme, classes)}
                                    onClick={() => onChangeImage(elem)}>
                                    <img src={image} alt='' className={classes.image} />
                                </div>
                            )
                        })}
                    </div>

                    <div className={getClassName('current__image__wrapper', theme, classes)}>
                        <img src={(data.images && (typeof (data.images) === 'string' ?
                            ((JSON.parse(data.images))[currentImage] || '') :
                            (data.images[currentImage] || '')))}
                            alt="" className={classes['current__image']} />
                    </div>

                    <div className={classes.info}>
                        <div className={classes.first}>
                            <h4 className={getClassName('title', theme, classes)}>{data.title}</h4>
                            <h4 className={getClassName('category', theme, classes)}>{data.category?.name}</h4>
                        </div>

                        <p className={getClassName('description', theme, classes)}>{data.description}</p>

                        <div className={classes.end}>
                            <div className={classes['price__wrapper']}>
                                <p className={getClassName('price__text', theme, classes)}>Price</p>
                                <p className={getClassName('price', theme, classes)}>
                                    ${data.price && getFormattedNumber(data.price)}
                                </p>
                            </div>

                            <button onClick={productInteractions} className={classes.button}>
                                {!inCart && 'Add To Cart'}
                                {inCart && 'Remove From Cart'}
                            </button>
                        </div>
                    </div>

                    <div className={getClassName('back', theme, classes)}
                        onClick={() => window.history.back()}>
                        <FaAngleLeft />
                        Back
                    </div>
                </div>
            </div>
        </div>
    )
}
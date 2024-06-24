import { useDispatch, useSelector } from 'react-redux'
import classes from '../styles/Products.module.css'
import { getClassName } from '../getStyleFromTheme'
import { RxMagnifyingGlass } from "react-icons/rx";
import { AiFillDatabase } from "react-icons/ai";
import Product from './Product';
import { fetchProducts } from '../store/productsSlice';
import { useEffect, useState } from 'react';
import { useGetCategoriesQuery } from '../store/categoriesApi';
import { useProducts } from '../hooks/useProducts';

export default function Products() {
    const [ user, setUser ] = useState()

    const dispatch = useDispatch()
    const { products, categoryId, isLoading: isLoadingProducts, error: productsError } = useSelector(value => value.products)
    const { data: categories = [], isError: categoriesError, isLoading: isLoadingCategories } = useGetCategoriesQuery()

    const [ searchValue, setSearchValue ] = useState('')

    const theme = useSelector(value => value.theme.theme)

    const filteredProducts = useProducts(products, searchValue)

    useEffect(() => {
        dispatch(fetchProducts(0))
    }, [])

    function onChangeCategory(categoryId) {
        dispatch(fetchProducts(categoryId))
    }

    useEffect(() => {
        const currentUser = localStorage.getItem('react-shop/currentUser')
        if (!currentUser) return
        const getUser = JSON.parse(localStorage.getItem(`react-shop/${currentUser}`))

        setUser(getUser)
    }, [])


    return (
        <div className={getClassName('wrapper', theme, classes)}>
            <div className={getClassName('container', theme, classes)}>
                <div className={getClassName('info', theme, classes)}>
                    <div className={getClassName('input__wrapper', theme, classes)}>
                        <RxMagnifyingGlass />
                        <input value={searchValue} placeholder='Search...' type="text" onChange={(e) => setSearchValue(e.target.value)}
                        className={getClassName('input', theme, classes)} />
                    </div>

                    <div className={getClassName('content', theme, classes)}>
                        {isLoadingProducts && <div className={getClassName('loading__products', theme, classes)}></div>}
                        {!isLoadingProducts && filteredProducts.length !== 0 && (
                            <div className={getClassName('products', theme, classes)}>
                                {filteredProducts.map(product => <Product key={product.id} 
                                user={user} setUser={setUser} product={product} {...product} />)}
                            </div>
                        )}

                        {productsError && <h1 className={getClassName('error__products', theme, classes)}>{productsError}</h1>}
                        {!isLoadingProducts && !productsError && filteredProducts.length === 0 && 
                        <h1 className={getClassName('notfound', theme, classes)}>
                            No products matching your criteria were found; please check your filters.
                        </h1>}

                        {isLoadingCategories && <div className={getClassName('loading__categories', theme, classes)}></div>}
                        {!isLoadingCategories && (
                            <div className={getClassName('categories', theme, classes)}>
                                <h3 className={getClassName('text', theme, classes)}>
                                    <AiFillDatabase /> Categories:
                                </h3>

                                <h1 style={categoryId === 0 ? {borderLeft: '2px solid rgb(111, 0, 255)'} : {}} className={getClassName('category', theme, classes)} 
                                onClick={() => onChangeCategory(0)}>All</h1>

                                {categories.map(category => {
                                    return (
                                        <h1 style={categoryId === category.id ? {borderLeft: '2px solid rgb(111, 0, 255)'} : {}}
                                        key={category.id} className={getClassName('category', theme, classes)} 
                                        onClick={() => onChangeCategory(category.id)}>
                                            {category.name}
                                        </h1>
                                    )
                                })}
                            </div>
                        )}

                        {categoriesError && <div className={getClassName('loading__categories', theme, classes)}></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
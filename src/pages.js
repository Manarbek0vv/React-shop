import Cart from "./components/Cart";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import ProductInfo from "./components/ProductInfo";
import Products from "./components/Products";
import SignUp from "./components/SignUp";

export const pages = [
    {path: '*', component: Home},
    {path: '/products', component: Products},
    {path: '/products/:id', component: ProductInfo},
    {path: '/signup', component: SignUp},
    {path: '/login', component: Login},
    {path: '/cart', component: Cart}
]
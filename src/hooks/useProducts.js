import { useMemo } from "react";

export const useProducts = (products, searchValue) => useMemo(() => {
    const filteredProducts = products.filter(product => product.title.toLowerCase()
    .includes(searchValue.toLowerCase()))

    return filteredProducts
}, [products, searchValue])
import {createContext, useState } from 'react'

export const ProductContext = createContext();
export default function Context(props){
    const [products, setProducts] = useState([])
    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}
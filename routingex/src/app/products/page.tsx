'use client'

import { useState } from "react";


export default function Products({searchParams
            }: {searchParams: {type: string}}){

               
    console.log(searchParams);
    let [search, setSearch] = useState('');

    let products = [
        { id: 1, name: 'Tea', price: 100, Group : 'Beverages' },
        { id: 2, name: 'Coffee', price: 200, Group : 'Beverages'},
        { id: 3, name: 'Choclate', price: 300, Group : 'Snacks'},
        { id: 4, name: 'Rice', price: 400, Group : 'Grocery'},
        { id: 5, name: 'IPhone', price: 500, Group : 'Electronics'},
    ]

    function filterProducts(){
        if(!searchParams.type){
            return products;
        }
        return products.filter(product => product.Group 
                        === searchParams.type);
    }

    return (
        <main>
            <h1>Products</h1>
            <input type="text" placeholder="Search Products" onChange={(e) => setSearch(e.target.value)} />
            {filterProducts().filter(d => d.name.indexOf(search) >= 0).map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                </div>
            ))}

        </main>
    );
}
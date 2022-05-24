import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products, setProducts]  = useProducts()
    return (
        <div >
            <h2 className='text-center my-4'>Products: {products.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                />)
            }
            </div>
        </div>
    );
};

export default Products;
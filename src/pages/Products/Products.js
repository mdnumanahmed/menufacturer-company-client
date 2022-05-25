import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products, setProducts]  = useProducts()
    return (
        <div className='py-8'>
            <h2 className='text-5xl text-primary text-center font-bold my-7'>Our Products</h2>
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
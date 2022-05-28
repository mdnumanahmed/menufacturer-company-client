import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import Product from './Product';

const Products = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://enigmatic-cove-82612.herokuapp.com/product').then(res => res.json()));
    if (isLoading) {
        return <Loading />
    };
    return (
        <div className='py-8'>
            <h2 className='text-5xl text-primary text-center font-bold my-7'>Our Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                products.slice(0, 6).map(product => <Product
                    key={product._id}
                    product={product}
                    refetch={refetch}
                />)
            }
            </div>
        </div>
    );
};

export default Products;
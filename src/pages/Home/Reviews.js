import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews]  = useState([]);
    useEffect(() => {
        fetch("https://enigmatic-cove-82612.herokuapp.com/review")
          .then((res) => res.json())
          .then((data) => setReviews(data));
      }, []);
    return (
        <div className='py-8'>
            <h2 className='text-5xl text-primary text-center font-bold my-7'>Our Customer Says</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                />)
            }
            </div>
        </div>
    );
};

export default Reviews;
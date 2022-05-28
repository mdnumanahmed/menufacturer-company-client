import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/review').then(res => res.json()))

    const imageStorageKey='c7aac89c32721a080bf23ab590824801';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const review = {
                    img: img,
                    name: data.name,
                    description: data.description,
                }
                // send to your database 
                fetch('http://localhost:5000/review', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(review)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Review added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the review');
                    }
                })

            }
            
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 mx-auto p-7 bg-slate-200 rounded-lg shadow-lg'>
            <h2 className="text-2xl">Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Reviewer Name</span>
                    </label>
                    <input
                        value={user?.displayName}
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Review Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>
                
                <input className='btn btn-success w-full max-w-xs text-white' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;
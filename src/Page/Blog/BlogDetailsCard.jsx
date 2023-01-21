import React from 'react';
import { userAvatar } from '../../Utility/Source';
import { formatDate } from '../../Utility/UtilityFunctions';

const BlogDetailsCard = ({ data }) => {

    console.log("data", data)

    return (
        <div className="bg-white p-[40px]">
            <img className='w-full h-[350px]' src={data?.image} alt="" />

            <div className="flex text-center mt-[20px]">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={userAvatar} alt="" />
                    </div>
                </div>
                <div className='ml-[10px] flex items-center text-dark'>
                    <span>Name</span>
                </div>
            </div>
            <div className='mt-[10px] text-dark'>{formatDate(data?.createdAt)}</div>

            <h2 className="font-bold pt-[20px]
            text-dark text-[20px] sm:text-xl md:text-xl  leading-snug sm:leading-snug md:leading-snug
            mb-6 wow fadeInUp" data-wow-delay=".1s">
                {data?.title}
            </h2>
            <div className='text-dark'>{data?.body}</div>
            <div className='text-dark'>{data?.description}</div>
        </div>
    );
};

export default BlogDetailsCard;
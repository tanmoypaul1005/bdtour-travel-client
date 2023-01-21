import React from 'react';
import { userAvatar } from '../../Utility/Source';
import { formatDate } from '../../Utility/UtilityFunctions';

const BlogCard = ({ data }) => {

     console.log("content", data)

    return (
        <div className=" p-[10px] ">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={data?.image} alt="Album" className='w-[700px]' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data?.title}</h2>
                    <div className="text-sm">{data?.body}</div>
                    <div>Created :{formatDate(data?.createdAt)}</div>

                    <div className="flex text-center">
                        <div className="avatar p-[5px] text-center">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img className="" src={userAvatar} alt="" />
                            </div>
                        </div>
                        <div className='ml-[10px] flex items-center '>Name</div>
                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
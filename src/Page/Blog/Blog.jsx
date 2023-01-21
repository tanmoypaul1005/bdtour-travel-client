import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGetBlogQuery } from '../../App/Features/Blog/BlogSlice';
import TourPackageCardShimmer from '../../Components/Card/TourPackageCardShimmer';
import Error from '../../Components/Error';
import BlogCard from './BlogCard';
import Loading from '../../Components/Loading';

const Blog = () => {

    const { data, isLoading, isError } = useGetBlogQuery();

    console.log("data", data)

    let content = null;

    if (isLoading) {
        content = <Loading />
    }

    if (!isLoading && isError) {
        content = <Error message="There was an error" />;
    }

    if (!isLoading && !isError && data?.data?.length > 0) {
        content = data?.data?.map((item, index) =>
            <NavLink to={`/blog/details/${item?._id}`}>
                <BlogCard key={index} data={item} />
            </NavLink>
        );
    }

    return (
        <div className="bg-white">
            {content}
        </div>
    );
};

export default Blog;
import React from 'react'
import { useGetBlogDetailsQuery } from '../../App/Features/Blog/BlogSlice'
import { useParams } from 'react-router'
import Error from '../../Components/Error';
import Loading from '../../Components/Loading';
import BlogDetailsCard from './BlogDetailsCard';

function BlogDetails() {

    const { blog_id } = useParams();

    const { isError, isLoading, isSuccess, data:blogdetails } = useGetBlogDetailsQuery(blog_id);
  
    let content;

    if (isError) {
        content = <Error />
    }
    if (isLoading && !isError) {
        content = <Loading />
    }

    if (!isError && !isLoading && isSuccess) {
        content =<BlogDetailsCard data={blogdetails?.data} />
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default BlogDetails

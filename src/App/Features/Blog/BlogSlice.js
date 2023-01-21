import { toast } from 'react-toastify';
import { ApiSlice } from "../Api/ApiSlice";

export const BlogSlice = ApiSlice.injectEndpoints({

  tagTypes: [],
  
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: () => "/blog/get",
      keepUnusedDataFor: 0,
      // providesTags: [""],
    }),

    getBlogDetails: builder.query({
      query: (blog_id) => `/blog/details/${blog_id}`,
      keepUnusedDataFor: 0,
    }),


    addBlog: builder.mutation({
      query: (data) => ({
        url: `/blog/add`,
        method: "POST",
        body: data,
      }),
      transformResponse: (response, meta, arg) =>
      { 
        if(response){
          toast.success("Add Booking successful");
        }else{
          toast.error("An error occurred!");
        }
      },
      keepUnusedDataFor: 0,
    }),

  }),
});

export const {
useGetBlogQuery,
useAddBlogMutation,
useGetBlogDetailsQuery
} = BlogSlice;

import { ToastContainer, toast } from 'react-toastify';
import { ApiSlice } from '../Api/ApiSlice';

export const BookingSlice = ApiSlice.injectEndpoints({

  tagTypes: ["Todos", "Filters"],

  endpoints: (builder) => ({
    // get TourPackage
    getBooking: builder.query({
      query: () => "/booking/get",
      keepUnusedDataFor: 0,
      // providesTags: ["Todos"],
    }),
    // get filters sections detail
    getTourPackageDetails: builder.query({
      query: (id) => `/tour-package/details/${id}`,
      keepUnusedDataFor: 0,
    }),


    addBooking: builder.mutation({
      query: (data) => ({
        url: `/booking/add`,
        method: "POST",
        body: data,
      }),
      transformResponse: (response, meta, arg) => {
        if (response) {
          toast.success("Add Booking successful");
        } else {
          toast.error("An error occurred!");
        }
      },
      keepUnusedDataFor: 0,
    }),

  }),
});

export const {
  useGetBookingQuery,
  useAddBookingMutation
} = BookingSlice;
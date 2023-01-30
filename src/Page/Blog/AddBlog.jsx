import React from 'react';
import CommonButton from '../../Components/CommonButton/CommonButton';
import CommonImageUploader from '../../Components/CommonImageUploader/CommonImageUploader';

const AddBlog = () => {
    return (
        <div>
            <form>
                <div className='  md:flex justify-evenly my-[30px]'>
                    <div className=''>
                        <div className="w-full ">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Last Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Last Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block 
                                 uppercase 
                                 tracking-wide
                               text-gray-700 
                                text-xs 
                                font-bold 
                                mb-2"
                                        for="grid-password">
                                        Body
                                    </label>
                                    <input
                                        className="
                                 appearance-none 
                                 block w-full
                               bg-gray-200
                               text-gray-700
                                 border
                               border-gray-200 
                                rounded py-3 px-4 mb-3 
                                leading-tight 
                                focus:outline-none
                              focus:bg-white 
                             focus:border-gray-500"
                                        id="grid-password"
                                        type="textarea"
                                        placeholder="Body"
                                    />
                                </div>
                            </div>


                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block 
                                 uppercase 
                                 tracking-wide
                               text-gray-700 
                                text-xs 
                                font-bold 
                                mb-2"
                                        for="grid-password">
                                        Description
                                    </label>
                                    <textarea
                                        className="
                                 appearance-none 
                                 block w-full
                               bg-gray-200
                               text-gray-700
                                 border
                               border-gray-200 
                                rounded py-3 px-4 mb-3 
                                leading-tight 
                                focus:outline-none
                              focus:bg-white 
                              focus:border-gray-500"
                                        rows="4" cols="50"
                                        id="grid-password"
                                        type="text"
                                        placeholder="Description"
                                    />
                                </div>
                            </div>



                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                        City
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                        State
                                    </label>
                                    <div className="relative">
                                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                            <option>New Mexico</option>
                                            <option>Missouri</option>
                                            <option>Texas</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                        Zip
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <CommonImageUploader />
                </div>
            </form>
            <div className='flex justify-center mb-[20px]'><CommonButton btnLabel="Add Button" /></div>
        </div>
    );
};

export default AddBlog;
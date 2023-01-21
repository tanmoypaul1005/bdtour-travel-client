import React from 'react';

const Search = () => {

    return (
        <div>
            <section className='container px-4 my-16 grid gap-8 md:grid-cols-3 bg-black py-4 rounded-[10px]'>
                <div className='md:col-span-2'>
                    <h3 className='uppercase font-extrabold mb-4 text-white'>
                        luxury included vacations for tow people
                    </h3>
                    <p className='mb-10 text-white text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut assumenda
                        soluta eum, voluptatem dolorem nostrum vitae. Vitae veniam ad, ipsam,
                        itaque consectetur nemo quis quasi libero quam in harum sed aut ex
                        doloremque consequuntur? Sed optio consectetur placeat non tempore.
                        Placeat omnis molestias perferendis magni ipsum eveniet ad esse dicta
                        accusamus pariatur adipisci, culpa soluta veniam repellendus
                        consequuntur cum debitis!
                    </p>
                    
                    <div className='flex flex-col sm:flex-row'>
                        <div className='text-center'>
                            <h4 className='uppercase font-extrabold mb-2'>leading service</h4>
                            <p className='uppercase text-white'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className='text-center'>
                            <h4 className='uppercase font-extrabold mb-2'>automated booking</h4>
                            <p className='uppercase text-white'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border px-4 py-4 uppercase text-center text-white'>
                        <p className='py-2'>get an additional 10% off</p>
                        <p className='py-2'>12 hours left</p>
                        <p className='py-2 text-white bg-black cursor-pointer'>
                            book now and save
                        </p>
                    </div>
                    <form action=''>
                        <div className='my-4 text-black'>
                            <label htmlFor='destination'>Destination</label>
                            <select
                                name='destinations'
                                id='destination'
                                className='block w-full p-2 border rounded'
                            >
                                <option value='dog'>Bora Bora</option>
                                <option value='cat'>Cozumel</option>
                                <option value='hamster'>Maldives</option>
                                <option value='parrot'>Jamaica</option>
                                <option value='spider'>Key West</option>
                                <option value='goldfish'>Antigua</option>
                            </select>
                        </div>
                        <div className='my-4'>
                            <label htmlFor='checkIn'>Check-In</label>
                            <input
                                type='date'
                                id='checkIn'
                                name='checkIn'
                                className='block w-full p-2 border rounded'
                            ></input>
                        </div>
                        
                        <div className='my-4'>
                            <label htmlFor='checkOut'>Check-Out</label>
                            <input
                                type='date'
                                id='checkOut'
                                name='checkOut'
                                className='block w-full p-2 border rounded'
                            ></input>
                        </div>
                        <button className='btn'>Rates & Availabilities</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Search;
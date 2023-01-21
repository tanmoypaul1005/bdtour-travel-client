import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    height: '300px',
    color: '#fff',
    // lineHeight: '360px',
    textAlign: 'center',
    background: '#364d79',
    width: '100%'
};

const CommonCarousel = () => {
    return (
        <div className='m-5'>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>
                        <img
                            className='w-full'
                            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                        />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img
                            className='w-full'
                            src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                        />

                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img
                            className='w-full'
                            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                        />
                    </h3>
                </div>

            </Carousel>
        </div>
    );
};

export default CommonCarousel;
import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => {

    return (
        <div className="flex justify-center py-[150px] bg-white">
            <RotatingLines
                strokeColor="green"
                strokeWidth="5"
                animationDuration="0.75"
                width="120"
                visible={true}
            />
        </div>
    );
};

export default Loading;
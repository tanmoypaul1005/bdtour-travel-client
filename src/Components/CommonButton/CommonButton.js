import React from 'react';

const CommonButton = ({
    btnLabel,
    onClick,
    type="button"
}) => {
    return (
        <div>
            <button
            type={type}
                onClick={onClick}
                className="
                  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                {btnLabel}
            </button>
        </div>
    );
};

export default CommonButton;
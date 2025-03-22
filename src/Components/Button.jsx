import React from 'react';

const Button = ({value}) => {
    if(value === 'Create Account'){
        return <button
        className='w-full py-3 rounded-lg text-center bg-[#6C25FF] text-[#FFF] text-base font-semibold'
    >
        Create Account
    </button>
    }
    if(value === 'Already Registered? Login')
    return (
        <button
            className='w-full py-3 rounded-lg text-center bg-[#6C25FF4B] text-[#1D2226] text-base font-semibold'
        >
            Already Registered? Login
        </button>
    );
};

export default Button;
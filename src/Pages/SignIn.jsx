import React from 'react';
import Button from '../Components/Button';
import { useDispatch } from 'react-redux';
import { login } from '../Features/useProfileSlice';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        dispatch(login({email}));
        navigate('/profile')
    }

    return (
        <div className='px-4 pt-10 bg-[#F7F8F9]'>
            <h1 className='text-[#1D2226] text-[28px] mb-[14px]'>Signin to your <br /> PopX account</h1>
            <p className='text-lg text-[#1D2226] opacity-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

            <form onSubmit={handleFormSubmit} className='mt-[33px]'>
                {/* email input  */}
                <div className='flex flex-col w-full'>
                    <label htmlFor="email" className='text-[#6C25FF] text-sm'>Email Address</label>
                    <input type="email" name="email" id="email" placeholder='Enter email address' className='border border-[#CBCBCB] rounded-lg p-2' required/>
                </div>
                {/* password input  */}
                <div className='flex flex-col w-full mb-[14px]'>
                    <label htmlFor="password" className='text-[#6C25FF] text-sm'>Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter password' className='border border-[#CBCBCB] rounded-lg p-2' required/>
                </div>
                {/* button  */}
                <Button value={'Login'}/>
            </form>

        </div>
    );
};

export default SignIn;
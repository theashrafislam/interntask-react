import React from 'react';
import Button from '../Components/Button';
import { useDispatch } from 'react-redux';
import { signUp } from '../Features/useProfileSlice';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;

        const fullName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const password = form.password.value;
        const companyName = form.companyName.value;
        const agency = form.querySelector('input[name="agency"]:checked')?.value || "Not selected";

        dispatch(signUp({ fullName, email }));
        navigate('/profile')
    };


    return (
        <div className='bg-[#F7F8F9] px-4 flex flex-col min-h-screen'>
            <h1 className='text-[28px] flex-1 pt-6 text-[#1D2226] pb-[22px] font-semibold'>
                Create your <br /> PopX account
            </h1>
            {/* form  */}
            <div className='flex-grow'>
                <form onSubmit={handleForm} className='flex flex-col gap-[20px]'>
                    {/* name input  */}
                    <div className='flex flex-col w-full'>
                        <label htmlFor="name" className='text-[#6C25FF] text-sm'>Full Name<span className='text-red-500'>*</span></label>
                        <input type="text" name="name" id="name" placeholder='Enter your fullname' className='border border-[#CBCBCB] rounded-lg p-2' required />
                    </div>
                    {/* mobile number input  */}
                    <div className='flex flex-col w-full'>
                        <label htmlFor="phone" className='text-[#6C25FF] text-sm'>Phone Number<span className='text-red-500'>*</span></label>
                        <input type="text" name="phone" id="phone" placeholder='Enter phone number' className='border border-[#CBCBCB] rounded-lg p-2' required />
                    </div>
                    {/* email input  */}
                    <div className='flex flex-col w-full'>
                        <label htmlFor="email" className='text-[#6C25FF] text-sm'>Email Address<span className='text-red-500'>*</span></label>
                        <input type="email" name="email" id="email" placeholder='Enter email address' className='border border-[#CBCBCB] rounded-lg p-2' required />
                    </div>
                    {/* password input  */}
                    <div className='flex flex-col w-full'>
                        <label htmlFor="password" className='text-[#6C25FF] text-sm'>Password<span className='text-red-500'>*</span></label>
                        <input type="password" name="password" id="password" placeholder='Enter password' className='border border-[#CBCBCB] rounded-lg p-2' required />
                    </div>
                    {/* Company input  */}
                    <div className='flex flex-col w-full'>
                        <label htmlFor="companyName" className='text-[#6C25FF] text-sm'>Company Name</label>
                        <input type="text" name="companyName" id="companyName" placeholder='Enter company name' className='border border-[#CBCBCB] rounded-lg p-2' />
                    </div>
                    {/* Are you an Agency?* */}
                    <div>
                        <label htmlFor="agency" className='text-sm'>Are you an Agency?<span className='text-red-500'>*</span></label>
                        <div className='flex items-center gap-4 mt-2'>
                            <label className='flex items-center gap-2'>
                                <input type="radio" name="agency" value="yes" className='border border-[#919191] rounded-lg p-2' required />
                                <span className='text-sm'>Yes</span>
                            </label>
                            <label className='flex items-center gap-2'>
                                <input type="radio" name="agency" value="no" className='border border-[#919191] rounded-lg p-2' required />
                                <span className='text-sm'>No</span>
                            </label>
                        </div>
                    </div>
                    {/* button  */}
                    <div className='flex-1'>
                        <Button value={'Create Account'} type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const data = useSelector((state) => state.profile.data);

    return (
        <div>
            <h1 className='px-4 pt-[27px] pb-[19px] text-lg text-[#1D2226]'>Account Settings</h1>
            <section className='bg-[#F7F8F9] px-4 pt-[30px]'>
                <div className='flex items-start gap-5 pb-[30px]'>
                    <div className='relative'>
                        <img src="/profile.png" alt="profile photo" />
                        <img src="/icon.png" alt="icon" className='absolute right-0 top-14'/>
                    </div>
                    <div className='flex flex-col gap-[6px] items-start'>
                        <h5 className='text-base text-[#1D2226] font-semibold'>{data?.fullName || 'Marry Doe'}</h5>
                        <p className='text-sm text-[#1D2226]'>{data?.email || 'Marry@Gmail.Com'}</p>
                    </div>
                </div>
                <p className='text-sm text-[#1D2226]'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            </section>
            <div className='bg-[#F7F8F9] flex flex-col'>
                <div className='border-b-2 border-dashed border-gray-300 pt-[20px]'></div>
                <div className='bg-[#F7F8F9] h-80'></div>
                <div className='border-b-2 border-dashed border-gray-300 pt-[20px]'></div>
                <div className='bg-[#F7F8F9] h-16'></div>
            </div>
        </div>
    );
};

export default Profile;
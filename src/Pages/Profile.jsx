import React from 'react';

const Profile = () => {
    return (
        <div>
            <h1 className='px-4 pt-[27px] pb-[19px] text-lg text-[#1D2226]'>Account Settings</h1>
            <section className='bg-[#F7F8F9] px-4 pt-[30px]'>
                <div className='flex items-start gap-5 pb-[30px]'>
                    <img src="/profile.png" alt="profile photo" />
                    <div className='flex flex-col gap-[6px] items-start'>
                        <h5 className='text-base text-[#1D2226] font-semibold'>Marry Doe</h5>
                        <p className='text-sm text-[#1D2226]'>Marry@Gmail.Com</p>
                    </div>
                </div>
                <p className='text-sm text-[#1D2226]'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            </section>
            <div className='bg-[#F7F8F9] flex flex-col'>
                <div className='border-b border-dashed border-gray-300 pt-[20px]'></div>
                <div className='bg-[#F7F8F9] h-80'></div>
                <div className='border-b border-dashed border-gray-300 pt-[20px]'></div>
                <div className='bg-[#F7F8F9] h-16'></div>
            </div>
        </div>
    );
};

export default Profile;
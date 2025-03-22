import React from 'react';
import Button from '../Components/Button';

const Home = () => {
    return (
        <div className='mx-3 flex justify-center items-end min-h-screen'>
            <div className='mb-[100px]'>
                <h2 className='text-[28px] font-medium text-[#1D2226] mb-[10px]'>Welcome to PopX</h2>
                <p className='text-lg text-[#1D2226] opacity-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                {/* button  */}
                <div className='mt-[30px] flex flex-col gap-[10px]'>
                    <Button value={'Create Account'}/>
                    <Button value={'Already Registered? Login'}/>
                </div>
            </div>
        </div>
    );
};

export default Home;
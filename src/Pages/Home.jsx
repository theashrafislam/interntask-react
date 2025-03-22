import React from 'react';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='px-4 flex justify-center items-end min-h-screen bg-[#F7F8F9]'>
            <div className='mb-[100px]'>
                <h2 className='text-[28px] font-medium text-[#1D2226] mb-[10px]'>Welcome to PopX</h2>
                <p className='text-lg text-[#1D2226] opacity-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                {/* button  */}
                <div className='mt-[30px] flex flex-col gap-[10px]'>
                    <Link to={'/sign-up'}>
                        <Button value={'Create Account'} />
                    </Link>
                    <Link to={'/sign-in'}>
                        <Button value={'Already Registered? Login'} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
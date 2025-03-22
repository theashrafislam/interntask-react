import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            hello i am root component
            <Outlet />
        </div>
    );
};

export default Root;
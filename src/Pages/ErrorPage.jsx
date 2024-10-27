import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[50vh]'>
            <div className='text-center'>
                <p>Oopss! </p>
                <p>Somethin went wrong</p>
            </div>
            <div>
            <Link to='/'><button>Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;
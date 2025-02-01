import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen text-center justify-center items-center flex flex-col '>
            <h1 className="text-5xl font-bold mb-12">Page Not Found.</h1>
            <Link className='btn btn-warning' to={'/'}>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;
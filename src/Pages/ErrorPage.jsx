import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            Ops!!
            <Link to='/'><button>Home</button></Link>
        </div>
    );
};

export default ErrorPage;
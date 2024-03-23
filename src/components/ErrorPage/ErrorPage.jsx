import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className="error">
            <h1 className='text-2xl font-bold'>Oops!!!</h1>
            <p className='text-base text-gray-500 font-normal'>Something went wrong</p>
            <Link to='/' className='btn border border-black'>Go Back</Link>
        </div>
    );
};

export default ErrorPage;
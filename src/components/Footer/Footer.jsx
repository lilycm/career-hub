import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className='lg:px-12 bg-[#1A1919] lg:py-12 mx-auto'>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 text-center lg:text-start pb-10">
                    <div className='space-y-3'>
                        <h1 className="font-extrabold text-4xl text-white font-man">CareerHub</h1>
                        <p className="text-white font-normal text-base font-man">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div className='s'>
                            <img className='lg:text-start text-center' src="/src/assets/icons/social.png" alt="" />
                        </div>
                    </div>
                    <div className='space-y-4 lg:mt-2 lg:ml-4'>
                        <h6 className="text-xl font-man font-normal text-white">Company</h6>
                        <p><Link className='text-white font-man font-normal text-base'>About Us</Link></p>
                        <p><Link className='text-white font-man font-normal text-base'>Work</Link></p>
                        <p><Link className='text-white font-man font-normal text-base'>Latest News</Link></p>
                        <p><Link className='text-white font-man font-normal text-base'>Careers</Link></p>
                    </div>
                    <div className='space-y-4 lg:mt-2 lg:ml-4'>
                        <h6 className="text-xl font-man font-normal text-white">Product</h6>
                        <p><Link className='text-white font-man font-normal text-base'>Prototype</Link></p>
                        <p><Link className='text-white font-man font-normal text-base'>Plans & Pricing</Link></p>
                        <p><Link className='text-white font-man font-normal text-base'>Customers</Link></p>
                        <p><Link className='text-white font-man font-normal text-base'>Integrations</Link></p>
                    </div>
                    <div className='space-y-4 lg:mt-2 lg:ml-4'>
                        <h6 className="text-xl font-man font-normal text-white">Support</h6>
                        <p><Link className='text-white font-man font-normal text-base'>Help Desk</Link></p>
                        <p><Link className='text-white font-man font-normal text-base'>Sales</Link></p>
                        <p><Link className='text-white font-man font-normal text-base'>Become a Partner</Link></p>
                        <p><Link className='text-white font-man font-normal text-base'>Developers</Link></p>
                    </div>
                    <div className='space-y-4 lg:mt-2 lg:ml-4'>
                        <h6 className="text-xl font-man font-normal text-white">Contact</h6>
                        <p><Link className='text-white font-man font-normal text-base'>524 Broadway , NYC</Link></p>
                        <p><Link className='text-white font-man font-normal text-base'>+1 777 - 978 - 5570</Link></p>
                    </div>


                </div>
                <hr />

                <div className='py-6 flex lg:flex-row flex-col justify-center lg:justify-between items-center'>
                    <p className='text-white font-normal font-man text-sm'>@2023 CareerHub. All Rights Reserved</p>
                    <p className='text-white font-normal font-man text-sm'>Powered by CareerHub</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
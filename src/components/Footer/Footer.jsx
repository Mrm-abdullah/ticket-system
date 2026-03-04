import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-neutral' >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-20 gap-8 text-[#A1A1AA] justify-between max-w-7xl mx-auto p-2">
                <nav className='flex flex-col gap-4 col-span-2'>
                    <h6 className="text-white text-2xl">Support Ticket Management</h6>
                    <p>Support Ticket Management Dashboard is a modern and responsive web application designed to manage and monitor customer support tickets efficiently. The system allows administrators to track ticket status, monitor priorities, and visualize overall support performance through an interactive dashboard interface.</p>
                </nav>
                <nav className='flex flex-col gap-4'>
                    <h6 className="text-white text-2xl">Company </h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className='flex flex-col gap-4'>
                    <h6 className="text-white text-2xl">Services </h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav className='flex flex-col gap-4'>
                    <h6 className="text-white text-2xl">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav className='flex flex-col gap-4'>
                    <h6 className="text-white text-2xl">Services </h6>
                    <a className="link link-hover"><i className="fa-brands fa-square-x-twitter"></i> @SupportTM</a> 
                    <a className="link link-hover"><i className="fa-brands fa-invision"></i> @SupportTM</a>
                    <a className="link link-hover"><i className="fa-brands fa-square-facebook"></i> @SupportTM</a>
                    <a className="link link-hover"><i className="fa-solid fa-envelope"></i>  Support@stm.com</a>
                </nav>
            </div>
            <hr />
            <div className="footer sm:footer-horizontal footer-center text-white p-8">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Support Ticket Management</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
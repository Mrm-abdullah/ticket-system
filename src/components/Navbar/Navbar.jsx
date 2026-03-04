import React from 'react';

const Navbar = () => {
    const navbars = (
            <>
                <li><a>Home </a></li>
                <li><a>FAQ</a></li>
                <li><a>Changelog </a></li>
                <li><a>Blog </a></li>
                <li><a>Download </a></li>
                <li><a>Contact</a></li>
                <button className="text-white btn btn-active bg-linear-to-r from-[#632EE3] to-[#9F62F2]"> <i className="fa-solid fa-plus"></i>New Ticket</button>
            </>
        )
    return (
        <div>
            <div className="navbar bg-base-100 items-center">
                <div className="md:navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navbars}
                            
                        </ul>
                    </div>
                    <a className="text-2xl font-bold ">Support Ticket Management</a>
                </div>
                
                <div className="hidden lg:flex">
                    <ul className="gap-4 items-center menu-horizontal px-1 text-lg ">
                        {navbars}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
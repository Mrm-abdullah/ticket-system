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
                <button className="text-white w-full lg:w-35 rounded p-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2]"> <i className="fa-solid fa-plus"></i>New Ticket</button>
            </>
        )
    return (
        <div>
            <div className="navbar bg-base-100 items-center p-1">
                <div className="md:navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-8 w-6 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navbars}
                            
                        </ul>
                    </div>
                    <a className="text-xl md:text-2xl font-bold ">Support T M</a>
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
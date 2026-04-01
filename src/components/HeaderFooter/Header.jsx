import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li><a href="">Products</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Faq</a></li>
                    </ul>
                </div>

                <a className="btn btn-ghost text-xl md:text-3xl bg-linear-to-b from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent font-bold">
                    Digi Tools
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="">Products</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Faq</a></li>
                </ul>
            </div>

            <div className="navbar-end gap-4">
                <FaShoppingCart />
                <a href="#">Login</a>
                <a href="./Pricing">
                    <button className="cursor-pointer bg-linear-to-b from-[#4f39f6] to-[#9514fa] rounded-full p-2 px-3 font-bold text-white">
                        Get Started
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Header;
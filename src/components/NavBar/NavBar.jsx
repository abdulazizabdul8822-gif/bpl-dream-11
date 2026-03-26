import React from 'react';
import dollerImg from "../../assets/dollar 1.png"
import logo from "../../assets/logo.png"

const NavBar = ({ coin }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto mt-5">
            <div className="flex-1">
                <img src={logo} alt="" />
            </div>
            <div className="flex-none">
                <button className=" flex justify-between items-center gap-2 font-bold text-xl border border-black rounded-2xl px-3 py-3">
                    {coin} Coin
                    <img src={dollerImg} alt="" />
                </button>
            </div>
        </div>
    );
};

export default NavBar;
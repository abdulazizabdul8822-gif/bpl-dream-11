import React from 'react';
import { MdDeleteSweep } from "react-icons/md";
import { FaUser } from "react-icons/fa"

const SelectedCard = ({ Player, handleDeleteSelectedPlayer }) => {
    return (
        <div className=' flex items-center justify-between gap-6 p-10 rounded-2xl border'>

            <div className=' flex items-center gap-6'>
                <div >
                    <img src={Player.img} alt={Player.playerName} className=' h-[75px] w-auto rounded-md' />
                </div>
                <div>
                    <h2 className=' flex items-center justify-between gap-2 font-semibold text-xl'> <FaUser />
                        {Player.playerName}</h2>
                    <p>{Player.type}</p>
                </div>
            </div>

            <button className=' btn text-red-500' onClick={() => handleDeleteSelectedPlayer(Player)}>
                <MdDeleteSweep />
            </button>

        </div>
    );
};

export default SelectedCard;
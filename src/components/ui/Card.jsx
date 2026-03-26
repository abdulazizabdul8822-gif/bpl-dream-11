import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const Card = ({ player, setCoin, coin }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleChosePlayer = () => {

        let newCoin = coin - player.price;
        if(newCoin >=0){
            setCoin(coin - player.price);
        } else{
            alert("Not enough coin to purchase this player");
            return;
        }


        alert(`${player.playerName} is selected`)
        setIsSelected(true);
        
    }
    return (
        <div className=" container mx-auto card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={player.img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><FaUser />{player.playerName}</h2>

                <div className=' flex justify-between'>
                    <div className=' flex justify-between items-center gap-2'>
                        <FaFlag />
                        <p>{player.country}</p>
                    </div>
                    <button className=' btn'>{player.type}</button>
                </div>
                <div className="divider"></div>
                <h2 className=' font-bold'>{player.rating}</h2>
                <div className=' flex justify-between gap-4 font-bold'>
                    <p>{player.battingStyle}</p>
                    <p className=' text-right'>{player.bowlingStyle}</p>
                </div>
                <div className="card-actions justify-between items-center">
                    <p className=' font-semibold'>Price: ${player.price}</p>


                    <button onClick={handleChosePlayer} disabled={isSelected ? true : false}
                     className="btn">{ isSelected === true ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );;
};

export default Card;
import React from 'react';
import Card from '../../../../ui/Card';

const AvailablePlaters = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
   
    return (

        <div>

            <div className=' container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    players.map((player, index) => {
                        
                        return  <Card key={index} player={player} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers ={selectedPlayers}></Card>
                       
                    })
                }
            </div>


        </div>


    );
};

export default AvailablePlaters;
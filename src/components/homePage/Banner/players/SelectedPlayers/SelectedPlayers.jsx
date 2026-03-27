import React from 'react';
import SelectedCard from '../../../../ui/SelectedCard';



const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, setCoin, coin }) => {
    console.log(selectedPlayers);


    const handleDeleteSelectedPlayer = (Player => {
        console.log(selectedPlayers, "selectedPlayers")

        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != Player.playerName);
        console.log(filteredPlayers, "filteredPlayers")
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + Player.price)
    })
    return (
        <div>
            <div className=' space-y-5'>
                {
                    selectedPlayers.length === 0 ? 
                    <div className=' flex justify-center items-center flex-col gap-4 h-[400px]'>
                        <h2 className=' font-semibold text-xl'>No players selected yet</h2>
                        <p>Go to Available tab to select players</p>
                    </div> :
                    selectedPlayers.map((Player, index) => {
                        return <SelectedCard key={index} Player={Player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></SelectedCard>
                    })
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;
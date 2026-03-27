import React, { use, useState } from 'react';
import AvailablePlaters from './AvailablePlayers/AvailablePlaters';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, setCoin, coin }) => {

    const players = use(playersPromise);

    const [selectedType, setSelectedType] = useState("available");
    console.log(selectedType, "selectedType");

    const [ selectedPlayers, setSelectedPlayers] = useState([]);
    return (
        <div className=' container mx-auto my-5'>

            <div className=' flex justify-between items-center gap-4 mb-4'>
                { selectedType === "available" ? <h2 className=' font-bold text-2xl'>Available Players</h2> :  <h2 className=' font-bold text-2xl'>Selected Players ({selectedPlayers.length}/{players.length})</h2>}
                <div>
                    <button onClick={() => setSelectedType("available")}
                    className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}  rounded-r-none rounded-l-xl`}>Available</button>
                    <button onClick={() => setSelectedType("selected")}
                    className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>
            {selectedType === "available" ? <AvailablePlaters 
            
            players={players} setCoin={setCoin} coin={coin}
            setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}
            
            ></AvailablePlaters>: <SelectedPlayers
            selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin}
            ></SelectedPlayers>}
        </div>
    );
};

export default Players;
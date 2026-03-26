import React, { use, useState } from 'react';
import AvailablePlaters from './AvailablePlayers/AvailablePlaters';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise }) => {

    const players = use(playersPromise);

    const [selectedType, setSelectedType] = useState("available");
    console.log(selectedType, "selectedType");
    return (
        <div className=' container mx-auto my-5'>

            <div className=' flex justify-between items-center gap-4 mb-4'>
                { selectedType === "available" ? <h2 className=' font-bold text-2xl'>Available Players</h2> :  <h2 className=' font-bold text-2xl'>Selected Players (2/6)</h2>}
                <div>
                    <button onClick={() => setSelectedType("available")}
                    className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}  rounded-r-none rounded-l-xl`}>Available</button>
                    <button onClick={() => setSelectedType("selected")}
                    className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected (0)</button>
                </div>
            </div>
            {selectedType === "available" ? <AvailablePlaters players={players}></AvailablePlaters>: <SelectedPlayers></SelectedPlayers>}
        </div>
    );
};

export default Players;
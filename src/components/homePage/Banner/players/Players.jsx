import React, { use } from 'react';
import AvailablePlaters from '../../../AvailablePlayers/AvailablePlaters';

const Players = ({ playersPromise }) => {
    console.log(playersPromise);
    const players = use(playersPromise);
    console.log(players);
    return (
        <div>
            Players: {players.length}

            <AvailablePlaters players={players}></AvailablePlaters>
        </div>
    );
};

export default Players;
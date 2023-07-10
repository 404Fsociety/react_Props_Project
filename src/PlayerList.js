import React from 'react';
import Player from './Player';
import players from './Playerss';

const PlayerList = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",marginLeft:"60px",marginRight:"60px",marginBottom:"100px"}}>
      {players.map((player) => (
        <Player
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))}
    </div>
  );
};

export default PlayerList;
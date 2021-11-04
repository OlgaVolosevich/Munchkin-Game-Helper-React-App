function PlayersList(props) {
  const { players, deletePlayer } = props;
  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>
          {player.name} <i onClick={() => deletePlayer(index)}>&times;</i>
        </li>
      ))}
    </ul>
  );
}

export default PlayersList;

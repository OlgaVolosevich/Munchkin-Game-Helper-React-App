function PlayersList(props) {
  const { players } = props;
  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>{player.name} <i>X</i></li>
      ))}
    </ul>
  );
}

export default PlayersList;

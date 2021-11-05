function PlayersList(props) {
  const { players, deletePlayer } = props;
  const listItems = players.map((player, index) => (
    <li key={index}>
      {player.name} <i onClick={() => deletePlayer(index)}>&times;</i>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default PlayersList;

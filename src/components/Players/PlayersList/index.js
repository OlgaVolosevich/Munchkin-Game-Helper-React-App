function PlayersList(props) {
  const { players, deletePlayer } = props;
  const listItems = players.map(({id, name}) => (
    <li key={id}>
      {name} <i onClick={() => deletePlayer(id)}>&times;</i>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default PlayersList;

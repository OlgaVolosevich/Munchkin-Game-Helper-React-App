import "./../../../fonts/icomoon/style.css"
function PlayersList(props) {
  const { players, deletePlayer } = props;
  const listItems = players.map(({id, name}) => (
    <li key={id}>
      {name} <span className="players-container__discard-icon icon-bin" onClick={() => deletePlayer(id)}></span>
    </li>
  ));
  return <ul className="players-container__names">{listItems}</ul>;
}

export default PlayersList;

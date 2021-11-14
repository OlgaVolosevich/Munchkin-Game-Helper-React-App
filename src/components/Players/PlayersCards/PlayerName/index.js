import "./../../../../fonts/icomoon/style.css";
function PlayerName(props) {
  const { name, deletePlayer, id } = props;
  return (
    <div className="players-cards__item__name">
      <p>{name}</p>
      <span className="icon-bin" onClick={() => deletePlayer(id)}></span>
    </div>
  );
}

export default PlayerName;

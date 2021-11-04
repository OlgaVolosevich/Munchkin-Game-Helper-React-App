import PlayerCard from "../PlayerCard";
function Players(props) {
  const { players } = props;
  return (
    <div className="players">
      {players.map((player, index) => (
        <PlayerCard player={player} key={index} />
      ))}
    </div>
  );
}

export default Players;

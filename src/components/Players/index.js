import PlayersCards from "./PlayersCards";
import PlayersList from "./PlayersList";
function Players(props) {
  const { players, isGameStarted, deletePlayer, regulateLevel } = props;
  return isGameStarted ? (
    <PlayersCards players={players} deletePlayer={deletePlayer} regulateLevel={regulateLevel}/>
  ) : (
    <PlayersList players={players} deletePlayer={deletePlayer} />
  );
}

export default Players;

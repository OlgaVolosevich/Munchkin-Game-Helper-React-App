import PlayersCards from "./PlayersCards";
import PlayersList from "./PlayersList";
function Players(props) {
  const { players, isGameStarted, deletePlayer } = props;
  return isGameStarted ? (
    <PlayersCards players={players} deletePlayer={deletePlayer} />
  ) : (
    <PlayersList players={players} deletePlayer={deletePlayer} />
  );
}

export default Players;

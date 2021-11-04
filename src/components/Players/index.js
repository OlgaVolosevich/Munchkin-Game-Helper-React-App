import PlayersCards from "./PlayersCards";
import PlayersList from "./PlayersList";
function Players(props) {
  const { players, isGameStarted } = props;
  return isGameStarted ? (
    <PlayersCards players={players} />
  ) : (
    <PlayersList players={players} />
  );
}

export default Players;

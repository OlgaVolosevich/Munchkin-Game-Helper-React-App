import "./styles.css";
import PlayersCards from "./PlayersCards";
import PlayersList from "./PlayersList";
function Players(props) {
  const { players, isGameStarted, deletePlayer, regulateLevel } = props;
  const content = isGameStarted ? (
    <PlayersCards
      players={players}
      deletePlayer={deletePlayer}
      regulateLevel={regulateLevel}
    />
  ) : (
    <PlayersList players={players} deletePlayer={deletePlayer} />
  );
  return (
    <div className="players-container">
      <h1 className="header">Игроки</h1>
      {players.length ? content : <p className="empty-list">Список игроков пуст</p>}
    </div>
  );
}

export default Players;

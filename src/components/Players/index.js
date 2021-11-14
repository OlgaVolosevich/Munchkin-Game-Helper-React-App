import "./styles.css";
import PlayersCards from "./PlayersCards";
import PlayersList from "./PlayersList";
function Players(props) {
  const {
    players,
    isGameStarted,
    deletePlayer,
    regulateLevel,
    editPlayerInfo,
  } = props;
  const content = isGameStarted ? (
    <PlayersCards
      players={players}
      deletePlayer={deletePlayer}
      regulateLevel={regulateLevel}
      editPlayerInfo={editPlayerInfo}
    />
  ) : (
    <PlayersList players={players} deletePlayer={deletePlayer} />
  );
  return (
    <div className={`players-container${isGameStarted ? " solo" : ""}`}>
      <h2 className="header">Игроки</h2>
      {players.length ? (
        content
      ) : (
        <p className="empty-list">Список игроков пуст</p>
      )}
    </div>
  );
}

export default Players;

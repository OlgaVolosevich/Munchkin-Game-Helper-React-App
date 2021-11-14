import PlayerName from "./PlayerName";
import PlayerGameInfo from "./PlayerGameInfo";
import PlayerLevel from "./PlayerLevel";

function PlayersCards(props) {
  const { players, deletePlayer, regulateLevel, editPlayerInfo } = props;
  const playersCards = players.map(
    ({ name, gameRace, gameClass, level, id, gender }) => {
      return (
        <div className="players-cards__item" key={id}>
          <PlayerName name={name} id={id} deletePlayer={deletePlayer} />
          <PlayerGameInfo gender={gender} gameRace={gameRace} gameClass={gameClass} editPlayerInfo={editPlayerInfo} id={id} />
          <PlayerLevel id={id} level={level} regulateLevel={regulateLevel} />
        </div>
      );
    }
  );
  return <div className="players-cards">{playersCards}</div>;
}
export default PlayersCards;

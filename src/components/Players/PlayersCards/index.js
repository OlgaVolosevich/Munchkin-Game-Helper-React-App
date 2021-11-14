import PlayerName from "./PlayerName";
import PlayerGameInfo from "./PlayerGameInfo";
import PlayerLevel from "./PlayerLevel";

function PlayersCards(props) {
  const { players, deletePlayer, regulateLevel } = props;
  const playersCards = players.map(
    ({ name, gameRace, gameClass, level, id }) => {
      return (
        <div className="players-cards__item" key={id}>
          <PlayerName name={name} id={id} deletePlayer={deletePlayer} />
          <PlayerGameInfo gameRace={gameRace} gameClass={gameClass} />
          <PlayerLevel id={id} level={level} regulateLevel={regulateLevel} />
        </div>
      );
    }
  );
  return <div className="players-cards">{playersCards}</div>;
}
export default PlayersCards;

const imgPlaceholder =
  "https://noahandcodaycare.com/wp-content/uploads/user-placeholder.jpg";

function PlayersCards(props) {
  const { players, deletePlayer, regulateLevel } = props;
  const playersCards = players.map(
    ({ name, gameRace, gameClass, level, gender }, index) => {
      return (
        <div className="players-cards__item" key={index}>
          <p>
            {name} <i onClick={() => deletePlayer(name)}>&times;</i>
          </p>
          <img src={imgPlaceholder} alt="player" />
          <p>
            Расса: {gameRace.toLowerCase()}, Класс: {gameClass.toLowerCase()}
          </p>
          <p>Пол: {gender ? gender.toLowerCase() : "не указан"}</p>
          <p>
            Уровень:{" "}
            <i
              className="level-reducer"
              onClick={(event) => regulateLevel(event, index)}
            >
              -
            </i>{" "}
            {level}{" "}
            <i
              className="level-adder"
              onClick={(event) => regulateLevel(event, index)}
            >
              +
            </i>
          </p>
        </div>
      );
    }
  );
  return <div className="players-cards">{playersCards}</div>;
}
export default PlayersCards;

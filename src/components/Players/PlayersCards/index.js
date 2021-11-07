const imgPlaceholder =
  "https://noahandcodaycare.com/wp-content/uploads/user-placeholder.jpg";

function PlayersCards(props) {
  const { players, deletePlayer, regulateLevel } = props;
  const playersCards = players.map(
    ({ name, gameRace, gameClass, level, gender, id }) => {
      return (
        <div className="players-cards__item" key={id}>
          <p>
            {name} <i onClick={() => deletePlayer(id)}>&times;</i>
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
              onClick={(event) => regulateLevel(event, id)}
            >
              -
            </i>{" "}
            {level}{" "}
            <i
              className="level-adder"
              onClick={(event) => regulateLevel(event, id)}
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

const imgPlaceholder =
  "https://noahandcodaycare.com/wp-content/uploads/user-placeholder.jpg";

function PlayersCards(props) {
  const { players, deletePlayer } = props;
  return (
    <div className="players-cards">
      {players.map(({ name, gameRace, gameClass, level, gender }, index) => {
        return (
          <div className="players-cards__item" key={index}>
            <p>
              {name} <i onClick={() => deletePlayer(name)}>&times;</i>
            </p>
            <img src={imgPlaceholder} alt="player" />
            <p>
              Расса: {gameRace.toLowerCase()}, Класс: {gameClass.toLowerCase()}
            </p>
            <p>Пол: {gender || "Не указан"}</p>
            <p>Уровень: {level}</p>
          </div>
        );
      })}
    </div>
  );
}
export default PlayersCards;

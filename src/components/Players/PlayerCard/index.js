const imgPlaceholder =
  "https://noahandcodaycare.com/wp-content/uploads/user-placeholder.jpg";

function PlayersCards(props) {
  const {players} = props;
  return (
    {
      players.map(({name, gameRace, gameClass, level, gender}, index)=> {
        return(
          <div key={index}>
      <img src={imgPlaceholder} alt="player" />
      <p>{name}</p>
      <p>
        Расса: {gameRace.toLowerCase()}, Класс: {gameClass.toLowerCase()}
      </p>
      <p>Пол: {gender || "Не указан"}</p>
      <p>Уровень: {level}</p>
    </div>
        )
      })
    }
  );
}

export default PlayersCards;

const imgPlaceholder =
  "https://noahandcodaycare.com/wp-content/uploads/user-placeholder.jpg";

function PlayerCard(props) {
  const { name, key, gameRace, gameClass, level, gender } = props.player;
  return (
    <div key={key}>
      <img src={imgPlaceholder} alt="player" />
      <p>{name}</p>
      <p>
        Расса: {gameRace.toLowerCase()}, Класс: {gameClass.toLowerCase()}
      </p>
      <p>Пол: {gender || "Не указан"}</p>
      <p>Уровень: {level}</p>
    </div>
  );
}

export default PlayerCard;

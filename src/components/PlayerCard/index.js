const imgPlaceholder =
  "https://noahandcodaycare.com/wp-content/uploads/user-placeholder.jpg";

function PlayerCard(props) {
  const { name, key, race, gameClass, level } = props.player;
  return (
    <div key={key}>
      <img src={imgPlaceholder} alt="player" />
      <p>{name}</p>
      <p>
        Расса: {race.toLowerCase()}, Класс: {gameClass.toLowerCase()}
      </p>
      <p>Уровень: {level}</p>
    </div>
  );
}

export default PlayerCard;

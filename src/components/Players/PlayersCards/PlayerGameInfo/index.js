function PlayerGameInfo(props) {
  const { gameRace, gameClass } = props;
  return (
    <div className="players-cards__item__game-info">
      <button className="race-btn">{gameRace}</button>
      <button className="class-btn">{gameClass}</button>
      <button className="gender-btn">Пол</button>
    </div>
  );
}
export default PlayerGameInfo;

/*const imgPlaceholder =
  "https://noahandcodaycare.com/wp-content/uploads/user-placeholder.jpg";*/
/*import "./../../../fonts/icomoon/style.css"*/
import "../../../fonts/icomoon/style.css";

function PlayersCards(props) {
  const { players, deletePlayer, regulateLevel } = props;
  const playersCards = players.map(
    ({ name, gameRace, gameClass, level, id }) => {
      return (
        <div className="players-cards__item" key={id}>
          <div className="players-cards__item__name">
            <p>{name}</p>
            <span className="icon-bin" onClick={() => deletePlayer(id)}></span>
            {/*<img className="players-cards__item__avatar" src={imgPlaceholder} alt="player" />*/}
          </div>
          <div className="players-cards__item__game-info">
            <button className="race-btn">{gameRace}</button>
            <button className="class-btn">{gameClass}</button>
            <button className="gender-btn">Пол</button>
          </div>
          <div className="players-cards__item__level">
            <small className="level-label">Уровень</small>
            <p className="level-regulation-container">
              <span
                className="level-reducer icon-minus"
                onClick={(event) => regulateLevel(event, id)}
              ></span>{" "}
              <span className="level-container">{level} </span>
              <span
                className="level-adder icon-plus"
                onClick={(event) => regulateLevel(event, id)}
              ></span>
            </p>
          </div>
        </div>
      );
    }
  );
  return <div className="players-cards">{playersCards}</div>;
}
export default PlayersCards;

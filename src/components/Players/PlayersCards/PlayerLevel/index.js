import "./../../../../fonts/icomoon/style.css";
function PlayerLevel(props) {
  const { regulateLevel, id, level } = props;
  return (
    <div className="players-cards__item__level">
      <p className="level-label">Уровень</p>
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
  );
}
export default PlayerLevel;

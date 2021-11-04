import Form from "../Form";

function GamePreset(props) {
  const { gameInfo, addNewPlayer, startGame } = props;
  return (
    <div className="preset-container">
      <h1>Добавьте игроков</h1>
      <Form addNewPlayer={addNewPlayer} gameInfo={gameInfo} />
      <button onClick={startGame}>Начать игру</button>
    </div>
  );
}

export default GamePreset;

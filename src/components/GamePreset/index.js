import Form from "../Form";

function GamePreset(props) {
  const { gameInfo, addNewPlayer, startGame } = props;
  return (
    <main>
      <h1>Добавьте игроков</h1>
      <Form addNewPlayer={addNewPlayer} gameInfo={gameInfo} />
      <button onClick={startGame}>Начать игру</button>
    </main>
  );
}

export default GamePreset;

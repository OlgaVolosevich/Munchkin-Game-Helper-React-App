import Form from "../Form";

function GamePreset(props) {
  const { gameInfo, addNewPlayer } = props;
  return (
    <div className="preset-container">
      <h1 className="header">Добавьте игроков</h1>
      <Form addNewPlayer={addNewPlayer} gameInfo={gameInfo} />
    </div>
  );
}

export default GamePreset;

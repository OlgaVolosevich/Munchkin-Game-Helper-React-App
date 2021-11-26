import Form from "../Form";

function GamePreset(props) {
  const { addNewPlayer, gameInfo } = props;
  return (
    <div className="preset-container">
      <h2 className="header">Добавьте игроков</h2>
      <Form addNewPlayer={addNewPlayer} gameInfo={gameInfo} />
    </div>
  );
}

export default GamePreset;

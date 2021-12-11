import "./styles.css";
function WarningModal(props) {
  const { text, closeWarning, winner, manageGame } = props;
  const content = winner ? `Победитель: ${winner.name}!` : text;
  const buttonText = winner ? "Сыграть снова" : "ОК";
  const clickHandler = (event) => {
    if (event.target.innerText === "Сыграть снова") {
      manageGame();
    }
    closeWarning();
  };
  return (
    <div className="warning">
      <p className="warning__text">{content}</p>
      <button
        className="warning__close-btn"
        onClick={(event) => clickHandler(event)}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default WarningModal;

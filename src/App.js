import "./App.css";
import { Component } from "react";
import Players from "./components/Players";
import GamePreset from "./components/GamePreset";
import WarningModal from "./components/WarningModal";
import gameInfo from "./gameInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      isGameStarted: false,
      winner: null,
      warning: {
        isNeeded: false,
        value: "",
      },
    };
  }
  addNewPlayer = (playerInfo) => {
  const arePlayersFull = !this.checkPlayersNumber("max");
    if (!arePlayersFull) {
    const id = Date.now();
    const { minLevel } = gameInfo;
    const newPlayer = { ...playerInfo, id, level: minLevel };
    const players = [...this.state.players, newPlayer];
    return this.setState({
      players,
    });
   } else {
    const warning = `Вы добавили максимальное количество игроков!`;
    this.showWarning(warning);
   }
  };
  deletePlayer = (id) => {
    const players = [...this.state.players].filter(
      (player) => player.id !== id
    );
    if (!players.length) {
      let { isGameStarted } = this.state;
      isGameStarted = false;
      this.setState({
        players,
        isGameStarted,
      });
    } else {
      this.setState({
        players,
      });
    }
  };
  checkPlayersNumber = (number) => {
    switch (number) {
      case "min":
        return this.state.players.length >= gameInfo.minPlayersNumber;
      case "max":
        return this.state.players.length < gameInfo.maxPlayersNumber;
      default:
        break;
    }
  };

  showWarning = (text) => {
    const warning = { ...this.state.warning };
    warning.isNeeded = true;
    warning.value = text || "Упс! Что-то пошло не так!";
    this.setState({
      warning,
    });
  };
  closeWarning = () => {
    const warning = { ...this.state.warning };
    warning.isNeeded = false;
    this.setState({
      warning,
    });
  };
  manageGame = () => {
    const arePlayersEnough = this.checkPlayersNumber("min");
    if (arePlayersEnough) {
      this.setState((state) => ({
        isGameStarted: !state.isGameStarted,
      }));
    } else {
      const { players } = this.state;
      const warningText = `Добавьте ещё минимум ${
        gameInfo.minPlayersNumber - players.length
      } игрока`;
      this.showWarning(warningText);
    }
  };
  regulateLevel = (event, id) => {
    const isLevelReducing = event.target.classList.contains("level-reducer");
    const { minLevel, winLevel } = gameInfo;
    const players = [...this.state.players];
    const player = players.filter((player) => player.id === id)[0];
    if (isLevelReducing) {
      player.level > minLevel && player.level--;
    } else {
      player.level < winLevel && player.level++;
    }
    if (player.level === winLevel) {
      this.setState({
        winner: player,
      });
      const message = `Победитель: манчкин ${player.name}!`;
      this.showWarning(message);
    }
    this.setState({
      players,
    });
  };
  editPlayerInfo = (id, changingField, value) => {
    const players = [...this.state.players];
    const player = players.filter((player) => player.id === id)[0];
    player[changingField] = value;
    this.setState({
      players,
    });
  };
  render() {
    const { isGameStarted, players, warning } = this.state;
    const { isNeeded } = warning;
    return (
      <>
        {(!isGameStarted || !players.length) && (
          <GamePreset
            gameInfo={gameInfo}
            addNewPlayer={this.addNewPlayer}
            startGame={this.startGame}
          />
        )}
        <Players
          players={players}
          isGameStarted={isGameStarted}
          deletePlayer={this.deletePlayer}
          regulateLevel={this.regulateLevel}
          editPlayerInfo={this.editPlayerInfo}
        />
        {!isGameStarted && (
          <button className="start-game-btn" onClick={this.manageGame}>
            Начать игру
          </button>
        )}
        {isNeeded && (
          <WarningModal text={warning.value} closeWarning={this.closeWarning} />
        )}
      </>
    );
  }
}

export default App;

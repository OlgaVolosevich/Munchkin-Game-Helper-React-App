import "./App.css";
import { Component } from "react";
import Players from "./components/Players";
import GamePreset from "./components/GamePreset";
import WarningModal from "./components/WarningModal";
import gameInfo from "./gameInfo";
import { newGameState, emptyPlayer } from "./defaultStateValues";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...newGameState,
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
      const warningText = `Вы добавили максимальное количество игроков!`;
      this.showWarning(warningText);
    }
  };
  deletePlayer = (id) => {
    const players = [...this.state.players].filter(
      (player) => player.id !== id
    );
    if (!players.length) {
      let { isGameStarted } = this.state;
      isGameStarted = false;
      return this.setState({
        players,
        isGameStarted,
      });
    } else {
      return this.setState({
        players,
      });
    }
  };
  checkPlayersNumber = (flag) => {
    switch (flag) {
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
    return this.setState({
      warning,
    });
  };
  closeWarning = () => {
    const warning = { ...this.state.warning };
    warning.isNeeded = false;
    return this.setState({
      warning,
    });
  };
  resetGame = () => {
    return this.setState({
      ...newGameState,
    });
  };
  manageGame = () => {
    const winner = this.state.winner;
    if (winner) {
      return this.resetGame();
    }
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
      this.showWarning();
    }
    this.setState({
      players,
    });
  };
  editPlayerInfo = (id, changingField, value, flag) => {
    const players = [...this.state.players];
    const player = players.filter((player) => player.id === id)[0];
    if (
      (changingField === "gameClass" || changingField === "gameRace") &&
      flag === "first"
    ) {
      player[changingField]["first"] = value;
    } else if (
      (changingField === "gameClass" || changingField === "gameRace") &&
      flag === "second"
    ) {
      player[changingField]["second"] = value;
    } else {
      player[changingField] = value;
    }
    this.setState({
      players,
    });
  };
  render() {
    const { isGameStarted, players, warning, winner } = this.state;
    return (
      <>
        {(!isGameStarted || !players.length) && (
          <GamePreset
            addNewPlayer={this.addNewPlayer}
            gameInfo={gameInfo}
            emptyPlayer={emptyPlayer}
          />
        )}
        <Players
          players={players}
          isGameStarted={isGameStarted}
          deletePlayer={this.deletePlayer}
          regulateLevel={this.regulateLevel}
          editPlayerInfo={this.editPlayerInfo}
          gameInfo={gameInfo}
        />
        {!isGameStarted && (
          <button className="start-game-btn" onClick={this.manageGame}>
            Начать игру
          </button>
        )}
        {warning.isNeeded && (
          <WarningModal
            text={warning.value}
            winner={winner}
            closeWarning={this.closeWarning}
            manageGame={this.manageGame}
          />
        )}
      </>
    );
  }
}

export default App;

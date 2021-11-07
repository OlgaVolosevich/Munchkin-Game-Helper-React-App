import "./App.css";
import { Component } from "react";
import Players from "./components/Players";
import GamePreset from "./components/GamePreset";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameInfo: {
        classOptions: ["Нет класса", "Волшебник", "Вор", "Клирик", "Воин"],
        raceOptions: ["Нет рассы", "Эльф", "Хафлинг", "Дварф"],
        defaultClass: "Нет класса",
        defaultRace: "Нет рассы",
        minLevel: 1,
        winLevel: 10,
      },
      players: [],
      isGameStarted: false,
      winner: null,
    };
  }
  addNewPlayer = (playerInfo) => {
    const id = Date.now();
    const { minLevel } = this.state.gameInfo;
    const newPlayer = { ...playerInfo, id, level: minLevel };
    const players = [...this.state.players, newPlayer];
    return this.setState({
      players,
    });
  };
  deletePlayer = (id) => {
    const players = [...this.state.players].filter(
      (player) => player.id !== id
    );
    this.setState({
      players,
    });
  };
  checkPlayersNumber = () => this.state.players.length >= 2;
  startGame = () => {
    if (this.checkPlayersNumber()) {
      this.setState({
        isGameStarted: true,
      });
    }
  };
  regulateLevel = (event, id) => {
    const isLevelReducing = event.target.classList.contains("level-reducer");
    const { minLevel, winLevel } = this.state.gameInfo;
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
    }
    this.setState({
      players,
    });
  };
  render() {
    const { gameInfo, isGameStarted, players } = this.state;
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
        />
      </>
    );
  }
}

export default App;

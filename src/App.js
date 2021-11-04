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
      },
      players: [],
      isGameStarted: false,
    };
  }
  addNewPlayer = (playerInfo) => {
    const newPlayer = { ...playerInfo, level: 1 };
    const players = [...this.state.players, newPlayer];
    return this.setState({
      players,
    });
  };
  deletePlayer = (index) => {
    const players = [...this.state.players];
    players.splice(index, 1);
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
        />
      </>
    );
  }
}

export default App;

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

  startGame = () => {
    this.setState({
      isGameStarted: true,
    });
  };
  render() {
    const { gameInfo, isGameStarted, players } = this.state;
    return (
      <>
        {!isGameStarted && (
          <GamePreset
            gameInfo={gameInfo}
            addNewPlayer={this.addNewPlayer}
            startGame={this.startGame}
          />
        )}
        <Players players={players} isGameStarted={isGameStarted} />
      </>
    );
  }
}

export default App;

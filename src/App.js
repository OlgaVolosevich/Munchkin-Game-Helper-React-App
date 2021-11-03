import "./App.css";
import { Component } from "react";
import Form from "./components/Form";
import PlayerCard from "./components/PlayerCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classOptions: ["Нет класса", "Волшебник", "Вор", "Клирик", "Воин"],
      raceOptions: ["Нет рассы", "Эльф", "Хафлинг", "Дварф"],
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
    const { classOptions, raceOptions, isGameStarted } = this.state;
    return isGameStarted ? (
      <div className="players">
        {this.state.players.map((player, index) => (
          <PlayerCard player={player} key={index} />
        ))}
      </div>
    ) : (
      <main>
        <h1>Добавьте игроков</h1>
        <Form
          classOptions={classOptions}
          raceOptions={raceOptions}
          addNewPlayer={this.addNewPlayer}
        />
        <button onClick={this.startGame}>Начать игру</button>
      </main>
    );
  }
}

export default App;

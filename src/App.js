import "./App.css";
import { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classOptions: ["Нет класса", "Волшебник", "Вор", "Клирик", "Воин"],
      raceOptions: ["Нет рассы", "Эльф", "Хафлинг", "Дварф"],
      players: [],
    };
  }
  addNewPlayer = (newPlayer) => {
    const players = [...this.state.players, newPlayer];
    return this.setState(
      {
        players,
      },
      () => {
        console.log(this.state.players, "---players");
      }
    );
  };
  render() {
    const { classOptions, raceOptions } = this.state;
    return (
      <main>
        <h1>Добавьте игроков</h1>
        <Form
          classOptions={classOptions}
          raceOptions={raceOptions}
          addNewPlayer={this.addNewPlayer}
        />
        <button>Начать игру</button>
      </main>
    );
  }
}

export default App;

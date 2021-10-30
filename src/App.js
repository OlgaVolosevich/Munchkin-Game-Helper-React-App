import "./App.css";
import { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <h1>Добавьте игроков</h1>
        <Form />
        <button>Начать игру</button>
      </main>
    );
  }
}

export default App;

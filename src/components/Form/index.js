import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {
        name: "",
        gameClass: this.props.classOptions[0],
        race: this.props.raceOptions[0],
        gender: null,
      },
    };
  }
  submitHandler(event) {
    event.preventDefault();
  }

  changeHandler = (event) => {
    const player = { ...this.state.player };
    player[event.target.name] = event.target.value;
    this.setState({
      player,
    });
  };
  addPlayerHandler = () => {
    const player = { ...this.state.player };
    this.props.addNewPlayer(player);
    this.resetInputValues();
  };
  resetInputValues = () => {
    const player = {
      name: "",
      gameClass: this.props.classOptions[0],
      race: this.props.raceOptions[0],
      gender: null,
    };
    this.setState({
      player,
    });
  };
  render() {
    const { classOptions, raceOptions } = this.props;
    const { name, gameClass, race } = this.state.player;
    return (
      <form action="/" name="playerInfo" onSubmit={this.submitHandler}>
        <label htmlFor="name">Имя</label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Введите имя"
          value={name}
          onChange={this.changeHandler}
        />
        <label htmlFor="race">Расса</label>
        <select
          id="race"
          name="race"
          value={race}
          onChange={this.changeHandler}
        >
          {raceOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        <label htmlFor="class">Класс</label>
        <select
          id="gameClass"
          name="gameClass"
          value={gameClass}
          onChange={this.changeHandler}
        >
          {classOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        <p>Пол</p>
        <label htmlFor="genderM">Мужской</label>
        <input
          type="radio"
          id="genderM"
          name="gender"
          value="male"
          onChange={this.changeHandler}
        />
        <label htmlFor="genderF">Женский</label>
        <input
          type="radio"
          id="genderF"
          name="gender"
          value="female"
          onChange={this.changeHandler}
        />
        <button onClick={this.addPlayerHandler}>Добавить игрока</button>
      </form>
    );
  }
}

export default Form;

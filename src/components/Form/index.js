import { Component } from "react";
import GenderInput from "./GenderInput";
import NameInput from "./NameInput";
import SelectInput from "./SelectInput";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {
        name: "",
        gameClass: this.props.gameInfo.defaultClass,
        gameRace: this.props.gameInfo.defaultRace,
        gender: null,
      },
      emptyPlayer: {
        name: "",
        gameClass: this.props.gameInfo.defaultClass,
        gameRace: this.props.gameInfo.defaultRace,
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
  buttonHandler = () => {
    const player = { ...this.state.player };
    this.props.addNewPlayer(player);
    this.resetInputValues();
  };
  resetInputValues = () => {
    const player = this.state.emptyPlayer;
    this.setState({
      player,
    });
  };
  render() {
    const { classOptions, raceOptions } = this.props.gameInfo;
    const { name, gameClass, gameRace } = this.state.player;
    const gameOptions = [
      {
        title: "Расса",
        options: [...raceOptions],
        name: "gameRace",
        value: gameRace,
      },
      {
        title: "Класс",
        options: [...classOptions],
        name: "gameClass",
        value: gameClass,
      },
    ];
    const genderOptions = [
      {
        value: "Мужской",
        id: "genderM",
        name: "gender",
      },
      {
        value: "Женский",
        id: "genderF",
        name: "gender",
      },
    ];
    return (
      <form action="/" name="playerInfo" onSubmit={this.submitHandler}>
        <NameInput name={name} inputHandler={this.changeHandler} />
        {gameOptions.map(({ title, options, name, value }, index) => (
          <SelectInput
            key={index}
            title={title}
            name={name}
            value={value}
            inputHandler={this.changeHandler}
            options={options}
          />
        ))}
        {genderOptions.map(({ value, id, name }, index) => (
          <GenderInput
            key={index}
            inputHandler={this.changeHandler}
            value={value}
            id={id}
            name={name}
          />
        ))}
        <button onClick={this.buttonHandler}>Добавить игрока</button>
      </form>
    );
  }
}

export default Form;

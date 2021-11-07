import "./styles.css";
import React from "react";
import { Component } from "react";
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
      /*      genderOptions : [
        {
          value: "Мужчина",
          id: "genderM",
          name: "gender",
          checked: false,
        },
        {
          value: "Женщина",
          id: "genderF",
          name: "gender",
          checked: false,
        },
      ],*/
    };
    this.errorMessage = React.createRef();
    this.nameInput = React.createRef();
  }
  submitHandler(event) {
    event.preventDefault();
  }
  changeHandler = (event) => {
    if (event.target.id === "name" && event.target.value) {
      this.errorMessage.current.style.visibility = "hidden";
    }
    const player = { ...this.state.player };
    player[event.target.name] = event.target.value;
    this.setState({
      player,
    });
  };
  buttonHandler = () => {
    if (this.state.player.name) {
      const player = { ...this.state.player };
      this.props.addNewPlayer(player);
      this.resetInputValues();
    } else {
      this.errorMessage.current.style.visibility = "visible";
      this.nameInput.current.focus();
    }
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
    return (
      <form
        className="form"
        action="/"
        method="POST"
        name="playerInfo"
        onSubmit={this.submitHandler}
      >
        <NameInput
          name={name}
          inputHandler={this.changeHandler}
          errorMessage={this.errorMessage}
          inputRef={this.nameInput}
        />
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
        <button className="form__add-player-btn" onClick={this.buttonHandler}>
          Добавить игрока
        </button>
      </form>
    );
  }
}

export default Form;

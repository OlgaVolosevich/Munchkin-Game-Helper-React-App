import { Component } from "react";
import React from "react";
import EditorModal from "./EditorModal";
import GenderInput from "./EditorModal/GenderInput";
import SelectInput from "../../../Form/SelectInput";
import "./../../../../fonts/icomoon/style.css";

class PlayerGameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInfoEdited: false,
      modal: null,
      gameClassOptions: {
        title: "Класс",
        options: [...props.gameInfo.classOptions],
        name: "gameClass",
        value: this.props.gameClass,
      },
      gameRaceOptions: {
        title: "Расса",
        options: [...props.gameInfo.raceOptions],
        name: "gameRace",
        value: this.props.gameRace,
      },
    };
    this.secondClass = React.createRef();
    this.secondRace = React.createRef();
  }
  toggleModal = () => {
    return this.setState((state) => ({
      isInfoEdited: !state.isInfoEdited,
    }));
  };
  clickHandler = (event) => {
    const { editPlayerInfo, id } = this.props;
    const targetClassList = event.target.classList[0];
    const classRaceFlag = event.target.classList[1];
    const gameClassOptions = { ...this.state.gameClassOptions };
    const gameRaceOptions = { ...this.state.gameRaceOptions };
    const selectHandler = (event, id, name) => {
      if (classRaceFlag === "first") {
        editPlayerInfo(id, name, event.target.value, classRaceFlag);
        if (event.target.id === "gameClass") {
          this.setState({
            gameClassOptions,
          });
        } else if (event.target.id === "gameRace") {
          gameRaceOptions.value.first = event.target.value;
          this.setState({
            gameRaceOptions,
          });
        }
      } else if (classRaceFlag === "second") {
        editPlayerInfo(id, name, event.target.value, classRaceFlag);
        if (event.target.id === "gameClass") {
          this.setState({
            gameClassOptions,
          });
        } else if (event.target.id === "gameRace") {
          gameRaceOptions.value.second = event.target.value;
          this.setState({
            gameRaceOptions,
          });
        }
      }
      this.toggleModal();
    };
    if (targetClassList === "gender-btn") {
      const gender = (
        <GenderInput
          id={id}
          toggleModal={this.toggleModal}
          changeGender={editPlayerInfo}
        />
      );
      this.setState({
        modal: <EditorModal content={gender} toggleModal={this.toggleModal} />,
      });
    } else if (targetClassList === "class-btn") {
      const { title, options, name, value } = gameClassOptions;
      const showValue =
        classRaceFlag === "second" ? value["second"] : value["first"];
      const classInput = (
        <SelectInput
          id={id}
          title={title}
          name={name}
          value={showValue}
          inputHandler={selectHandler}
          options={options}
        />
      );
      this.setState({
        modal: (
          <EditorModal content={classInput} toggleModal={this.toggleModal} />
        ),
      });
    } else if (targetClassList === "race-btn") {
      const { title, options, name, value } = gameRaceOptions;
      const showValue =
        classRaceFlag === "second" ? value["second"] : value["first"];
      const raceInput = (
        <SelectInput
          id={id}
          title={title}
          name={name}
          value={showValue}
          inputHandler={selectHandler}
          options={options}
        />
      );
      this.setState({
        modal: (
          <EditorModal content={raceInput} toggleModal={this.toggleModal} />
        ),
      });
    } else if (targetClassList === "icon-plus") {
      event.stopPropagation();
      if (classRaceFlag === "gameClass") {
        return this.secondClass.current.classList.remove("hidden");
      } else if (classRaceFlag === "gameRace") {
        return this.secondRace.current.classList.remove("hidden");
      }
    } else if (targetClassList === "icon-minus") {
      event.stopPropagation();
      if (classRaceFlag === "gameClass") {
        editPlayerInfo(
          id,
          classRaceFlag,
          this.props.gameInfo.defaultClass,
          "second"
        );
        this.secondClass.current.classList.add("hidden");
        return;
      } else if (classRaceFlag === "gameRace") {
        editPlayerInfo(
          id,
          classRaceFlag,
          this.props.gameInfo.defaultRace,
          "second"
        );
        this.secondRace.current.classList.add("hidden");
        return;
      }
    }
    this.toggleModal();
  };
  render() {
    const { gameRace, gameClass, gender } = this.props;
    const { isInfoEdited, modal } = this.state;
    return (
      <>
      <div className="players-cards__item__game-info">
        <button className="race-btn first" onClick={this.clickHandler}>
          {gameRace["first"]}
          <span
            title="Добавить вторую рассу"
            className="icon-plus gameRace"
          ></span>
        </button>
        <button
          ref={this.secondRace}
          className="race-btn second hidden"
          onClick={this.clickHandler}
        >
          {gameRace["second"]}
          <span
            title="Удалить вторую рассу"
            className="icon-minus gameRace"
          ></span>
        </button>
        <button className="class-btn first" onClick={this.clickHandler}>
          {gameClass["first"]}
          <span
            title="Добавить второй класс"
            className="icon-plus gameClass"
          ></span>
        </button>
        <button
          ref={this.secondClass}
          className="class-btn second hidden"
          onClick={this.clickHandler}
        >
          {gameClass["second"]}
          <span
            title="Удалить второй класс"
            className="icon-minus gameClass"
          ></span>
        </button>
        <button className="gender-btn" onClick={this.clickHandler}>
          {gender || "Пол не указан"}
        </button>
      </div>
      {isInfoEdited && modal}
      </>
    );
  }
}
export default PlayerGameInfo;

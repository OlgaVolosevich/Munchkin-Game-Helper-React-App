import { Component } from "react";
import EditorModal from "./EditorModal";
import GenderInput from "./EditorModal/GenderInput";
import SelectInput from "../../../Form/SelectInput";

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
  }

  toggleModal = () => {
    return this.setState((state) => ({
      isInfoEdited: !state.isInfoEdited,
    }));
  };

  clickHandler = (event) => {
    const { editPlayerInfo, id } = this.props;
    const targetClassList = event.target.classList[0];
    const gameClassOptions = { ...this.state.gameClassOptions };
    const gameRaceOptions = { ...this.state.gameRaceOptions };
    const selectHandler = (event, id, name) => {
      editPlayerInfo(id, name, event.target.value);
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
      const classInput = (
        <SelectInput
          id={id}
          title={title}
          name={name}
          value={value.first}
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
      const raceInput = (
        <SelectInput
          id={id}
          title={title}
          name={name}
          value={value.first}
          inputHandler={selectHandler}
          options={options}
        />
      );
      this.setState({
        modal: (
          <EditorModal content={raceInput} toggleModal={this.toggleModal} />
        ),
      });
    }
    this.toggleModal();
  };
  render() {
    const { gameRace, gameClass, gender } = this.props;
    const { isInfoEdited, modal } = this.state;
    return (
      <div className="players-cards__item__game-info">
        <button className="race-btn" onClick={this.clickHandler}>
          {gameRace.first}
        </button>
        <button className="class-btn" onClick={this.clickHandler}>
          {gameClass.first}
        </button>
        <button className="gender-btn" onClick={this.clickHandler}>
          {gender || "Пол не указан"}
        </button>
        {isInfoEdited && modal}
      </div>
    );
  }
}
export default PlayerGameInfo;

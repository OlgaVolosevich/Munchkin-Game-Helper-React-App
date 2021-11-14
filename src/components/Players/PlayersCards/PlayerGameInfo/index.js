import { Component } from "react";
import EditorModal from "./EditorModal";
import GenderInput from "./EditorModal/GenderInput";

class PlayerGameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInfoEdited: false,
      modal: null,
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
    switch (targetClassList) {
      case "gender-btn":
        const gender = (
          <GenderInput
            id={id}
            toggleModal={this.toggleModal}
            changeGender={editPlayerInfo}
          />
        );
        this.setState({
          modal: (
            <EditorModal content={gender} toggleModal={this.toggleModal} />
          ),
        });
        break;
      default:
        break;
    }

    this.toggleModal();
  };
  render() {
    const { gameRace, gameClass, gender } = this.props;
    const { isInfoEdited, modal } = this.state;
    return (
      <div className="players-cards__item__game-info">
        <button className="race-btn">{gameRace}</button>
        <button className="class-btn">{gameClass}</button>
        <button className="gender-btn" onClick={this.clickHandler}>
          {gender || "Пол не указан"}
        </button>
        {isInfoEdited && modal}
      </div>
    );
  }
}
export default PlayerGameInfo;

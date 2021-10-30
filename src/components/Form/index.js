import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form action="/" name="playerInfo">
        <label htmlFor="name">Имя</label>
        <input name="name" id="name" type="text" placeholder="Введите имя" />
        <label htmlFor="race">Расса</label>
        <select id="race" defaultValue="Нет рассы">
          <option>Нет рассы</option>
          <option>Эльф</option>
          <option>Хафлинг</option>
          <option>Дварф</option>
        </select>
        <label htmlFor="class">Класс</label>
        <select id="class" defaultValue="Нет класса">
          <option>Нет класса</option>
          <option>Волшебник</option>
          <option>Вор</option>
          <option>Клирик</option>
          <option>Воин</option>
        </select>
        <p>Пол</p>
        <label htmlFor="genderM">Мужской</label>
        <input type="radio" id="genderM" name="gender" value="male" />
        <label htmlFor="genderF">Женский</label>
        <input type="radio" id="genderF" name="gender" value="female" />
        <button>Добавить игрока</button>
      </form>
    );
  }
}

export default Form;

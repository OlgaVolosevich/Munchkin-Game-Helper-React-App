function GenderInput(props) {
  const { inputHandler, id, value, name } = props;

  return (
    <>
      <label htmlFor={id}>{value}</label>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={inputHandler}
      />
    </>
  );
}

export default GenderInput;
/*
 <label htmlFor="genderM">Мужской</label>
      <input
        type="radio"
        id="genderM"
        name="gender"
        value="мужской"
        onChange={inputHandler}
      />
      <label htmlFor="genderF">Женский</label>
      <input
        type="radio"
        id="genderF"
        name="gender"
        value="женский"
        onChange={inputHandler}
      />
*/

function GenderInput(props) {
  const { inputHandler, id, value, name } = props;

  return (
    <div className="form__gender-input__item">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={inputHandler}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
}

export default GenderInput;

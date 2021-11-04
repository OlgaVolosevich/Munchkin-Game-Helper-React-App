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
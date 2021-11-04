function NameInput(props) {
    const {name, inputHandler} = props;
  return (
    <>
      <label htmlFor="name">Имя</label>
      <input
        name="name"
        id="name"
        type="text"
        placeholder="Введите имя"
        value={name}
        onChange={inputHandler}
      />
    </>
  );
}

export default NameInput;

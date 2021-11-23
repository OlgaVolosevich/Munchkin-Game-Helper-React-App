function NameInput(props) {
  const { name, inputHandler, inputRef, errorMessage } = props;
  return (
    <>
      <div className="form__name-input">
        <label htmlFor="name">Имя</label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Введите имя"
          value={name}
          onChange={inputHandler}
          onKeyDown={inputHandler}
          ref={inputRef}
        />
        <p className="form__error-message" ref={errorMessage}>
          У манчкина должно быть имя!
        </p>
      </div>
    </>
  );
}

export default NameInput;

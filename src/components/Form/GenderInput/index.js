function GenderInput(props) {
  const { genderOptions, inputHandler } = props;

  return (
    <div className="form__gender-input">
      {genderOptions.map(({value, id, name, checked}) => {
        return (
          <div className="form__gender-input__item" key={id}>
            <input
              type="radio"
              id={id}
              name={name}
              value={value}
              onChange={(event)=>inputHandler(event)}
              checked={checked}
            />
            <label htmlFor={id}>{value}</label>
          </div>
        );
      })}
    </div>
  );
}

export default GenderInput;
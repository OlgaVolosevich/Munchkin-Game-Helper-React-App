function SelectInput(props) {
  const { title, name, value, inputHandler, options } = props;
  return (
    <div className="form__select-input">
      <label htmlFor={name}>{title}</label>
      <select id={name} name={name} value={value} onChange={inputHandler}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;

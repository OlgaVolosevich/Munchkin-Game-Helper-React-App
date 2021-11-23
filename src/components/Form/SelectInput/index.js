function SelectInput(props) {
  const { title, name, value, inputHandler, options, id } = props;
  return (
    <div className="select-input">
      <label htmlFor={name}>{title} </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(event) => inputHandler(event, id, name)}
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;

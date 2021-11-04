function SelectInput(props) {
  const { title, name, value, inputHandler, options } = props;
  return (
    <>
      <label htmlFor={name}>{title}</label>
      <select id={name} name={name} value={value} onChange={inputHandler}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </>
  );
}

export default SelectInput;

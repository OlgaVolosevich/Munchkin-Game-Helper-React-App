function GenderInput(props) {
  const genderOptions = [
    {
      value: "Мужчина",
      name: "gender",
    },
    {
      value: "Женщина",
      name: "gender",
    },
  ];
  const { changeGender, id, toggleModal } = props;
  const clickHandler = (id, name, value) => {
    changeGender(id, name, value);
    toggleModal();
  };

  const buttons = genderOptions.map(({ value, name }, index) => {
    return (
      <button
        className="edit-modal__gender-btn"
        key={index}
        onClick={() => clickHandler(id, name, value)}
      >
        {value}
      </button>
    );
  });
  return <>{buttons}</>;
}

export default GenderInput;

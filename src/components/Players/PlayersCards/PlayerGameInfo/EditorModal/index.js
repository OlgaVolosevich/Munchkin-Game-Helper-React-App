import "./../../../../../fonts/icomoon/style.css";
function EditorModal(props) {
  const { content, toggleModal } = props;
  return (
    <div className="edit-modal">
      {content}
      <span
        onClick={toggleModal}
        className="edit-modal__close-btn icon-cancel-circle"
      ></span>
    </div>
  );
}

export default EditorModal;

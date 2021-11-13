import "./styles.css";
function WarningModal (props) {
const { text, closeWarning } = props;
return (
    <div className="warning">
        <p className="warning__text">{text}</p>
        <button className="warning__close-btn" onClick={closeWarning}>ОК</button>
    </div>
)
}

export default WarningModal;
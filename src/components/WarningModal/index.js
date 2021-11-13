import "./styles.css";
function WarningModal (props) {

return (
    <div className="warning">
        <p className="warning__text">{props.text}</p>
        <button className="warning__close-btn" onClick={props.closeWarning}>ОК</button>
    </div>
)
}

export default WarningModal;
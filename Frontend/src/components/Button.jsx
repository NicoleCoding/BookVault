export default function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.icon && <span className="icon">{props.icon}</span>} 
            <span className="button-text">{props.text}</span>
            {props.disabled}
        </button>
    );
}
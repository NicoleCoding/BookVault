export default function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.icon && <span className="icon">{props.icon}</span>} 
            {props.text}
            {props.disabled}
        </button>
    );
}
export default function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.icon && <span className="icon">{props.icon}</span>} {/* Render the icon if it exists */}
            {props.text}
        </button>
    );
}
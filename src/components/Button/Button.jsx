import style from "./Button.module.scss"
export function Button ({
    size,
    color,
    title,
    action
}) {

    return (
        <button
        className={`${style.button} ${style[color]} ${style[size]}`}
        onClick={action}
        >
            {title}
        </button>
    )
}
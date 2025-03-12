import style from "./InputField.module.scss"

export function InputField({type, placeholder, name, id, labelText, action}) {

    const onInputChange = (event) => {
        action(event.target.value);
    }
    return (
        <>
        {labelText && <label htmlFor={name}>{labelText}</label>}
        <input 
        className={style.input}
        name={name}
        onChange={(event) => onInputChange(event)}
        id={id}
        type={type}         
        placeholder={placeholder}
        />
        </>
    )
}
import style from './InputBox.module.scss'


export const InputBox = ({ type, placeholder, name, labelText, action, custom, id }) => {

    const onInputChange = (event) => {
        action(event.target.value);
      };
      
    return (
        <>
            {name && <label htmlFor={name}>{labelText}</label>}
            <input
                className={`${style.inputStyle} ${style[custom]}`}
                onChange={(event) => onInputChange(event)}
                id={id}
                type={type}
                placeholder={placeholder}
                name={name}
            />
        </>
    )
}
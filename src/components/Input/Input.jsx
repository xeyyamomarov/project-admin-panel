const Input = ({name, value, onChange = (text) => {} ,style}) => {
    return <input id = "input" name = {name} style={style} type="text" value={value} onChange = {el => onChange(el.currentTarget.value)}/>
}

export default Input;
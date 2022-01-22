const Button = ({ type = "submit", children ,onClick=()=>{} }) => {
    return (<button id = "btn" type={type} onClick={onClick}> {children}</button>)
}

export default Button;
const NormalButton = ({ type = "", children, onClick, style }) => {
    return (<button id = "btn" className="normal-button" style = {style} type={type} onClick = {onClick}>{children}</button>)
}

export default NormalButton;
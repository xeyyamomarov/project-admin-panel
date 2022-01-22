
const Link = ({ type = "", children, onClick }) => {
    return (<button id = "btn" className="link" type={type} onClick = {onClick}>{children}</button>)
}

export default Link;
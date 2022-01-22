import classNames from "classnames"
const Hamburger = ({ active, setActive }) => {
    return (
        <button className={classNames("hamburger", "hamburger--collapse", { "is-active": active })} type="button" onClick={() => setActive(!active)}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}

export default Hamburger;
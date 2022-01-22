import classNames from 'classnames';
const SideBar = ({ collapse, header, menus = [], onChangeMenu = () => { } }) => {
    return <aside id="side-bar" className={classNames({ 'visible': collapse })}>
        {
            header && <header>
                {header}
            </header>
        }
        <ul>
            {
                menus?.map((menu) => {
                    return (
                        <li key = {menu.key} onClick={() => {
                            if (onChangeMenu) onChangeMenu(menu.key)
                        }}>
                            <span>
                                {menu.title}
                            </span>
                        </li>)
                })
            }

        </ul>
    </aside>
}

export default SideBar;
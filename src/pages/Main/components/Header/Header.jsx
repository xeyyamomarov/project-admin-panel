import { Hamburger } from 'components/Button';
import { LS } from 'utils';
import { appConfig } from 'configs';
import { Link as LinkButton } from 'components/Button';
import { useNavigate } from "react-router-dom";
const Header = ({ sideBarVisible, setSideBarVisible }) => {
    const userData = JSON.parse(LS.getItemLocalStorage(appConfig.userData) || "{}");
    const navigate = useNavigate();

    return <header className="main-header">
        <Hamburger active={sideBarVisible} setActive={setSideBarVisible} />
        <div style={{ display: "flex", alignItems: "baseline" }}>
            <h3>
                {
                    `${userData.first_name || ""} ${userData.last_name || ""}`
                }
            </h3>
            <LinkButton onClick={() => {
                LS.removeItemLocalStorage(appConfig.userData);
                setTimeout(() => {
                    navigate("/Login", { replace: true });
                }, 100);

            }} >Log out</LinkButton>
        </div>

    </header>
}

export default Header;
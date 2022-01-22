import "./style.scss"
import { useState } from 'react';
import { Input, PasswordInput } from 'components/Input';
import { Button } from 'components/Button';
import { signIn } from 'api/Sign';
import {LS} from 'utils';
import {appConfig} from 'configs';
import {useNavigate } from "react-router-dom";
import Loading from "components/Loading";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    return <section id="login-page">
        <form onSubmit={(event) => {
            event.preventDefault();
            const elements = event.target.elements;
            const username = elements["username"].value;
            const password = elements["password"].value;
            setLoading(true);
            signIn({ username, password })
                .then(res => {
                    LS.setItemLocalStorage(appConfig.userData, JSON.stringify(res.data))
                    navigate("/", { replace: true });
                })
                .catch(err => alert("Xeta bas verdi"))
                .finally(() => { setLoading(false) })
        }}>
            <Input name="username" />
            <PasswordInput name="password" />
            <Button type="submit">
                Login
            </Button>
            {loading && <Loading/>}
        </form>
    </section>
}


export default Login;
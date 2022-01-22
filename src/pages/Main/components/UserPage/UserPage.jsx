import { get as getUser, update as updateUser } from "api/Users";
import { Input } from "components/Input";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { Button, NormalButton } from "components/Button";
import Loading from "components/Loading";
const inputStyle = { marginBottom: "3rem" };
const UserPage = () => {
  const [user, setUser] = useState({ loading: false });
  const { id } = useParams();
  const navigate = useNavigate();
  const redirect=()=> navigate('/users')
  useEffect(() => {
    setUser((old) => ({ ...old, loading: true }));
    getUser({ id })
      .then((res) =>
        setUser((old) => ({ ...old, ...(res?.data || {}), loading: false }))
      )
      .catch((err) => {
        console.log(err);
        setUser((old) => ({ ...old, loading: false }));
      });
  }, [id]);
  return (
    <div className="user-page">
      <div className="user-form-container">
        <Input
          style={inputStyle}
          value={user["first_name"]}
          onChange={(text) => setUser((old) => ({ ...old, first_name: text }))}
        />
        <Input
          style={inputStyle}
          value={user["last_name"]}
          onChange={(text) => setUser((old) => ({ ...old, last_name: text }))}
        />
        <Input
          value={user["username"]}
          onChange={(text) => setUser((old) => ({ ...old, username: text }))}
        />
        {user.loading && <Loading/>}
      </div>
      <div className="btn">
        <NormalButton
          style={{ marginRight: "2rem" }}
          onClick={() => redirect()}
        >
          Cancel
        </NormalButton>
        <Button
          onClick={() => {
            const { first_name, last_name, username } = user;
            setUser(old => ({ ...old, loading: true }));
            updateUser({
              id,
              user: { first_name, last_name, username, roles: [1, 2] },
            })
              .then()
              .catch()
              .finally(()=>{
                  setUser(old=> ({...old,loading:false}))
                  redirect()
              })
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default UserPage;

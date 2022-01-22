import "./App.css";
import { useEffect } from "react";
import Login from "pages/Login";
import Main from "pages/Main";
import { Routes, Route, useNavigate } from "react-router-dom";
import { appConfig } from "configs";
import { LS } from "utils";
import { UsersPage, UserPage, ProductsPage } from "pages/Main/components/Pages";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const userData = LS.getItemLocalStorage(appConfig.userData);
    if (!userData) {
      navigate("/Login", { replace: true });
    }
  }, [navigate]);
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Main />}>
          <Route path="users" element={<UsersPage />} />
          <Route path="user/:id" element={<UserPage />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

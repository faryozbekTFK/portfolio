import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Main from "./layouts/Main";
import Posts from "./pages/posts/Posts";
import Comments from "./pages/comments/Comments";
import Albums from "./pages/albums/Albums";
import Photos from "./pages/photos/Photos";
import Todos from "./pages/todos/Todos";
import Users from "./pages/users/Users";

import "./assets/styles/index.css";
import "./assets/styles/tailwind.css";
import Login from "./pages/login/Login";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [user, setUser] = useState(
    localStorage.getItem("token") ? true : false
  );

  useEffect(() => {
    localStorage.getItem("token") ? setUser(true) : setUser(false);
  }, [pathname]);

  useEffect(() => {
    user && navigate("/posts");
  }, [user, navigate]);

  return (
    <Routes>
      <Route index element={<Login />} />
      {user && (
        <Route element={<Main />}>
          <Route path="posts" element={<Posts />} />
          <Route path="comments" element={<Comments />} />
          <Route path="albums" element={<Albums />} />
          <Route path="photos" element={<Photos />} />
          <Route path="todos" element={<Todos />} />
          <Route path="users" element={<Users />} />
        </Route>
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

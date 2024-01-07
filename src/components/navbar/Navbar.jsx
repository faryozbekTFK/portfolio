import React from "react";
import { Link, useLocation } from "react-router-dom";

const NAVBAR_ROUTES = [
  { id: 1, path: "/posts", label: "Post", key: "posts" },
  { id: 2, path: "/comments", label: "Comments", key: "comments" },
  { id: 3, path: "/albums", label: "Albums", key: "albums" },
  { id: 4, path: "/photos", label: "Photos", key: "photos" },
  { id: 5, path: "/todos", label: "Todos", key: "todos" },
  { id: 6, path: "/users", label: "Users", key: "users" },
];

function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="navbar">
      {NAVBAR_ROUTES?.map((route) => (
        <Link
          key={route?.id}
          to={route?.path}
          className={`${
            pathname?.split("/")?.[1] === route?.key ? "active" : ""
          }`}
        >
          {route?.label}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;

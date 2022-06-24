import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <nav className="flex flex-wrap sm:justify-between justify-center items-center p-5 pb-0 border-b">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/" className="text-2xl font-semibold text-gray-900 dark:text-gray-200 py-1 px-2">
          <h1>Google</h1>
        </Link>
        <button
          type="button"
          className="text-xl bg-white dark:bg-gray-500 dark:text-gray-900 rounded-full px-3 py-2 my-2 hover:shadow-lg"
          onClick={() => setDarkTheme((prevTheme) => !prevTheme)}
        >
          {darkTheme ? "☀️" : "🌙"}
        </button>
      </div>
      <Search />
    </nav>
  );
};

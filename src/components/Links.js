import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/image", text: "📸 Images" },
  { url: "/video", text: "📺 Videos" },
];
export const Links = () => {
  return (
    <div className="flex justify-between sm:justify-around items-center mt-4">
      {links.map(({ url, text }, index) => (
        <NavLink
          key={index}
          to={url}
          activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
          className="m-2 mb-0"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

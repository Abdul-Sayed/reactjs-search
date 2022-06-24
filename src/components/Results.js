import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Loading } from "./Loading";
import { useResultContext } from "../contexts/ResultContextProvider";

export const Results = () => {
  const { getResults, results, searchTerm, setSearchTerm, isLoading } = useResultContext();
  const location = useLocation();

  console.log(location.pathname);

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/video") {
        getResults(`/search/q=${searchTerm} video`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) {
    return <Loading />;
  }

  console.log(results);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap flex-col items-start justify-start w-full space-y-6 sm:px-12">
          {results?.map(({ link, title, description }, index) => (
            <div key={index} className="w-full">
              <p className="text-sm">{link.length > 30 ? `${link.substring(0, 30)}...` : link}</p>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:underline dark:text-blue-300 text-blue-700"
              >
                {title}
              </a>
              <p className="text-md">{description}</p>
            </div>
          ))}
        </div>
      );
    case "/image":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a href={href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap flex-col items-start justify-start w-full space-y-6 sm:px-12">
          {results?.map(({ links, id, title, source }) => (
            <div key={id} className="w-full">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:underline dark:text-blue-300 text-blue-700"
              >
                {title}
              </a>
              <p className="flex gap-4 text-md">
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </p>
            </div>
          ))}
        </div>
      );
    case "/video":
      return (
        <div className="flex flex-wrap justify-center">
          {results?.map((video, index) => (
            <div key={index} className="p-2">
              {video?.additional_links?.[0]?.href && (
                <ReactPlayer
                  url={video.additional_links[0].href}
                  controls
                  width="355px"
                  height="200px"
                />
              )}
            </div>
          ))}
        </div>
      );
    default:
      return "Error";
  }
};

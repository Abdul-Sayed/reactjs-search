import React, { useState, useContext, createContext } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // url = "search" | "image" | "news" | "video"
  const getResults = async (url) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "US",
        "X-RapidAPI-Key": process.env.REACT_APP_Google_Search_API_Key,
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });

    const data = await response.json();

    if (url.includes("search")) {
      setResults(data.results);
    } else if (url.includes("image")) {
      setResults(data.image_results);
    } else if (url.includes("news")) {
      setResults(data.entries);
    } else if (url.includes("video")) {
      setResults(data.results);
    }

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);

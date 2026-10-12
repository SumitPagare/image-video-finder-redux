import React from "react";
import SearchBard from "../components/SearchBard";
import Tab from "../components/Tab";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";

function HomePage() {
  const { query } = useSelector((store) => store.search);

  return (
    <main className="min-h-[calc(100vh-73px)] bg-gray-950">
      <SearchBard />

      {query !== "" && (
        <>
          <Tab />
          <ResultGrid />
        </>
      )}
    </main>
  );
}

export default HomePage;

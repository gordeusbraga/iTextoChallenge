import React from "react";
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import Posts from "./components/Posts.jsx";
import "./styles/App.css";
export default function App() {
  return (
    <section className="w-screen h-screen bg-[#F9FAFB] flex flex-col items-center justify-start ">
      <Header></Header>
      <Search></Search>
      <section className="w-[100%] h-[80%] flex align-center justify-center flex-wrap overflow-y-scroll scrollbar-hide max-w-[1040px]">
        <Posts />
        <Posts />
        <Posts />

      </section>

    </section>
  );
}

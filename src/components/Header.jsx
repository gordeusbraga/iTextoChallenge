import React from "react";
import { Menu } from "lucide-react";
import "../styles/App.css";

export default (props) => {
    return (
        <header className="flex items-center w-screen h-1/6 border-b-2 border-[#111827] justify-between mb-4"  >
            <h1 className="text-[#14B605] text-5xl font-bold pl-6"  >/Dev/All</h1>
            <button className="pt-1.5 pr-3"><Menu size={50} /></button>
        </header>
    );
};

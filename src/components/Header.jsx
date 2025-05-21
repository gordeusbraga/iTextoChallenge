import React from "react";
import { Menu } from "lucide-react";
import "../styles/App.css";


export default () => {

    return (
        <header className="flex items-center w-screen h-1/6 justify-between mb-2.5  max-w-[1400px]"  >
            <h1 className="text-[#111827] text-5xl  pl-6 font-title font-bold"  >/dev/All</h1>
            <button className="pt-1.5 pr-3"><Menu size={50} /></button>
        </header>
    );
};

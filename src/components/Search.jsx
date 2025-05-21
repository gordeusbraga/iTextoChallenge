import React from "react";
import { Search } from "lucide-react";

export default function SearchComponents(props) {
  const [search, setSearch] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = search.trim();
    props.onSearch(trimmed);
    setSearch("");
  }

  return (
    <section className="flex justify-center mt-[1%] w-full h-16 border-b-2 pb-23 border-[#111827] rounded-b-[5px]">
      <form onSubmit={handleSubmit} className="relative w-[60%] md:w-[500px] pt-1.25">
        <input
          type="text"
          className="w-full h-12 border-2 bg-[#111827] rounded-4xl p-4 pr-14 text-[#F9FAFB] text-xl placeholder:text-[#F9FAFB] focus:outline-none f placeholder-font-body"
          placeholder="Pesquisar..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
          type="submit"
          className="absolute top-2 right-0 -translate-y-1/13 w-13 h-12 bg-[#14B605] rounded-bl-[30%] rounded-se-[30%] flex items-center justify-center hover:bg-[#111827] transition duration-300 ease-in-out"
        >
          <Search size={28} color="white" />
        </button>
      </form>
    </section>
  );
}

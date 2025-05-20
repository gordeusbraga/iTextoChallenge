import { Search } from "lucide-react";
export default (props) => {
  return (
    <section className="flex items-center justify-center mt-[1%]">
      <input
        type="text"
        className="w-[30%] h-12 border-2 bg-[#111827] rounded-lg p-4 text-[#F9FAFB] text-2xl placeholder:text-[#F9FAFB] focus:outline-none focus:border-[#14B605] focus:ring-1 focus:ring-[#14B605]"
        placeholder="Pesquisar..."
      />
      <button className="w-12 h-11.5 bg-[#14B605] rounded-bl-[30%] rounded-se-[30%] flex items-center justify-center hover:bg-[#111827] transition duration-300 ease-in-out ml-[-2%]">
        <Search />
      </button>
    </section>
  );
};

"use client";
import { ChangeEvent, useState } from "react";
import { Search } from "react-feather";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar = ({ onSearch = () => {} }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="w-[36.181vw] aspect-[521/44] flex flex-row items-center gap-[0.889vw] px-[1.333vw] border-[0.069vw] border-[#2B252D] rounded-[0.556vw]">
      <Search color="white" />
      <input
        className="w-full text-neutral-black-light border-0 outline-0"
        type="text"
        placeholder="Search anything.."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;

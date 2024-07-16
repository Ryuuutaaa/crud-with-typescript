"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    console.log(term);
  };
  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        placeholder="search.."
        className="w-full border border-gray-700 py-2 pl-10 text-sm outline-2 rounded-sm"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-500" />
    </div>
  );
};

export default Search;

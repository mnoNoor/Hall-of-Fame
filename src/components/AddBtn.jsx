import { Button } from "./ui/button";
import { useState } from "react";

export default function AddBtn({ title, setQuery }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setQuery(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <h2 className="scroll-m-20 border-b p-3 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {title}
        </h2>
        <div className="">
          <input
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="h-8 w-[300px] m-5 border border-black rounded-md"
            placeholder="Search by name..."
          />
          <Button onClick={handleSearch} className="hover:cursor-pointer">Search</Button>
        </div>
        <div></div>
      </div>
      <hr className="bg-black"></hr>
    </>
  );
}
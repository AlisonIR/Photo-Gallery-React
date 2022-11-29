import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-[#ff9785] py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."/>

          <button
            className="flex-shrink-0 bg-[#ff9785] hover:bg-[#ff6b6d] border-[#ff9785] hover:border-[#ff6b6d] text-sm border-4 text-white py-1 px-2 rounded"
            type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;

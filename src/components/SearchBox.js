import React, { useState } from "react";

const SearchBox = () => {
  const [queryString, setQueryString] = useState("");

  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="search-container">
      <input onChange={handleOnChange} type="text" />
    </div>
  );
};

export default SearchBox;

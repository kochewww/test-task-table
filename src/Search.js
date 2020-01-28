import React, { useState } from "react";
export default props => {
  const [searchValue, setSearchValue] = useState("");
  const searchChangeHandler = e => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="input-group mb-3 mt-3">
      <div className="input-group-prepend">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          onClick={() => props.onSearch(searchValue)}
        >
          Search
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
        value={searchValue}
        onChange={searchChangeHandler}
      />
    </div>
  );
};

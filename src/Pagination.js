import React from "react";
export default props => {
  return (
    <nav aria-label="Page navigation example">
      <ul id="page-numbers" className="pagination">
        {props.pageNumbers.map(number => {
          return (
            <button
              className="page-link"
              href=""
              key={number}
              id={number}
              onClick={props.handleClick}
            >
              {number}
            </button>
          );
        })}
      </ul>
    </nav>
  );
};

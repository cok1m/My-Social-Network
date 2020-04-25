import React, { useState, useEffect } from "react";
import styles from "./Paginator.module.css";

let Paginator = ({
  onPageChanged,
  currentPage,
  totalItemsCount,
  pageSize,
  portionSize = 10,
}) => {
  let pages = [];
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 &&
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          PREV
        </button>
      }
      {pages
        .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map((page) => {
        return (
          <span
            key={page}
            onClick={() => {
              onPageChanged(page);
            }}
            className={
              (currentPage === page && styles.selectedPage) +
              " " +
              styles.currentPage
            }
          >
            {page + " "}
          </span>
        );
      })}
      {portionCount > portionNumber &&
      <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button> }
    </div>
  );
};

export default Paginator;

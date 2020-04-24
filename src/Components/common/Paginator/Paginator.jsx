import React from 'react'
import styles from './Paginator.module.css'


let Paginator = ({onPageChanged, currentPage, totalUsersCount, pageSize}) => {
  let pages = [];
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
 return (
  <div className={styles.pages}>
  {pages.map((page) => {
    return (
      <span key={page}
        onClick={() => { onPageChanged(page) }}
        className={(currentPage === page && styles.selectedPage) + " " + styles.currentPage }
      >
        {page + " "}
      </span>
    );
  })}
</div>
 )
}

export default Paginator
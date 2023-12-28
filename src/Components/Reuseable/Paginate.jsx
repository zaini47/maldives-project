// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import ReactPaginate from 'react-paginate';
// import { Link } from 'react-router-dom';
// import './Paginate.css';

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function Pagination({ itemsPerPage }) {
//   const [itemOffset, setItemOffset] = useState(0);

//   const endOffset = itemOffset + itemsPerPage;
//   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//   const currentItems = items.slice(itemOffset, endOffset);

//   // const pageCount = Math.ceil(items.length / itemsPerPage);

//   const handlePageClick = (event) => {
//     const newOffset = event.selected * itemsPerPage;
//     console.log(
//       `User requested page number ${event.selected + 1}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel=" >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={3}
//         pageCount={10}
//         previousLabel="<"
//          renderOnZeroPageCount={null}
//          containerClassName='custom_ul'
//          breakClassName='custom_li'
//          pageClassName='custom_li'
//          breakLinkClassName='custom_a'
//          pageLinkClassName='custom_A'
//          nextClassName='custom_next'
//          nextLinkClassName='custom_nextA'
//          previousClassNameClassName='custom_previous'
//          previousLinkClassName='custom_previousB'
//       />
//     </>
//   );
// }

// export default Pagination;

import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  let count = 0;  

  for (let i = 1 ; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
    count = count + 1;
    

  }

  return (  
    <div>
    <nav> <br></br>

      
        {pageNumbers.map(pageNumber => (
          <td key={pageNumber} >
            <a onClick={() => paginate(pageNumber)} href='!#' >
            {pageNumber} &nbsp; 
            </a>
            </td> ))}
          
            

          {/* <td>
            <a onClick = 
          </td> */}
      
    </nav>
    </div> 
);
};

export default Pagination;


// import React from 'react';

// const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
      
//         {pageNumbers.map(number => (
//           <td key={number}>
//             <a onClick={() => paginate(number)} href='!#'> <br></br>
//               {number} &nbsp;&nbsp; |
//             </a>
//         </td> 
//         ))}
      
//     </nav>
//   );
// };

// export default Pagination;
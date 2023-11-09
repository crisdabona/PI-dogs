import React from 'react';

import './pagination.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 3; 
  const pageNumbers = [];

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination'>
      <ul>
        {currentPage > 1 && (
          <li>
            <button onClick={() => onPageChange(currentPage - 1)}>Anterior</button>
          </li>
        )}
        {pageNumbers.map(number => (
          <li key={number}>
            <button onClick={() => onPageChange(number)} className={number === currentPage ? 'active' : ''}>
              {number}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button onClick={() => onPageChange(currentPage + 1)}>Siguiente</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;

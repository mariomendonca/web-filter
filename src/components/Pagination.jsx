import React from 'react'
import { Link } from 'react-router-dom'
export default function Pagination({ cardsPerPage, totalCards, paginate }) {
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage ); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number}>
            <Link onClick={() => paginate(number)} to='#'>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

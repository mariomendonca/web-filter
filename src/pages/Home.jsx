import React from 'react'

import Header from '../components/Header'
import data from '../data/data'
import '../styles/home.css'
import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <>
    <Header />
    <div className='container'>
      <div className='filter-container'>
        
      </div>
      <div className='imoveis-container'>
        <ul>
          {data.map(produto => (
            <Link to={`/${produto.id}`}> 
              <li key={produto.id}>
                <strong>Cidade: </strong>
                <p>{produto.cidade}</p>
                <strong>Bairro:</strong>
                <p>{produto.bairro}</p>
                <strong>Tamanho: </strong>
                <p>{produto.tamanho}</p>
                <strong>Preço: </strong>
                <p>{produto.preco}</p>
                <strong>Quartos: </strong>
                <p>{produto.quartos}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}
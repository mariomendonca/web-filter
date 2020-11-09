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
        <label>Cidade: </label>
        <select>
          <option>Recife</option>
          <option>Rio de Janeiro</option>
        </select>

        <label>Bairro: </label>
        <select>
          <option>Aflitos</option>
          <option>Espinheiro</option>
        </select>

        <label>Tamanho (m²): </label>
        <select>
          <option>70m2- 120m2</option>
          <option>120 - 150</option>
          <option>150 - 200</option>
        </select>

        <label>Preço: </label>
        <select>
          <option>1000 - 1200</option>
          <option>1200- 1500</option>
          <option>1500 - 2000</option>
          <option>2000 -</option>
        </select>

        <label>Quartos: </label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
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
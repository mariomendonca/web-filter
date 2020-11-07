import React, { useState } from 'react'

import Header from '../components/Header'
import data from '../data/data'
import '../styles/home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [bedrooms, setBedrooms] = useState('')

  // const [filtered, setFiltered] = useState('')


  function handleSearch(e) {
    e.preventDefault()

    const filteredItems = {
      city,
      neighborhood,
      size,
      price,
      bedrooms
    }

    console.log(filteredItems)
    // const test = data.filter(produto => produto.cidade === 'Recife')
    // setFiltered(test)
    // console.log('hello')    
  }
  // const test = data.filter(produto => produto.cidade === 'Recife')
  // setFiltered(test)
  // console.log(test)

  return (
    <>
    <Header />
    <div className='container'>
      <div className='filter-container'>
        <form onSubmit={handleSearch}>
          <label>Cidade: </label>
          <select 
            value={city}
            onChange={e => setCity(e.target.value)}
          >
            <option value=''>Não especificado</option>
            <option value='Recife'>Recife</option>
            <option value='Rio de Janeiro'>Rio de Janeiro</option>
          </select>

          <label>Bairro: </label>
          <select 
            value={neighborhood}
            onChange={e => setNeighborhood(e.target.value)}
            >
            <option value=''>Não especificado</option>
            <option value='Aflitos'>Aflitos</option>
            <option value='Espinheiro'>Espinheiro</option>
          </select>

          <label>Tamanho (m²): </label>
          <select
            value={size}
            onChange={e => setSize(e.target.value)}          
          >
            <option value=''>Não especificado</option>
            <option value='70'>70- 120</option>
            <option value='120'>120 - 150</option>
            <option value='150'>150 - 200</option>
          </select>

          <label>Preço: </label>
          <select
            value={price}
            onChange={e => setPrice(e.target.value)}          
          >
            <option value=''>Não especificado</option>
            <option value='1000'>1000 - 1200</option>
            <option value='1200'>1200- 1500</option>
            <option value='1500'>1500 - 2000</option>
            <option value='2000'>2000 -</option>
          </select>

          <label>Quartos: </label>
          <select
            value={bedrooms}
            onChange={e => setBedrooms(e.target.value)}          
          >
            <option value=''>Não especificado</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>

          <button type='submit'>
            search
          </button>
        </form>
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
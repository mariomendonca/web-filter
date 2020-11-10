import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

import Header from '../components/Header'
import data from '../data/data'
import '../styles/home.css'

export default function Home() {
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const [filteredData, setFilteredData] = useState([...data])

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
    return filteredItems
  }

  return (
    <>
    <Header />
    <div className='container'>
      <div className='filter-container'>
        {/* <form onSubmit={console.log(filteredData)}> */}
        <form onSubmit={handleSearch}>
          <div>
            <label>Cidade: </label>
            <select 
              value={city}
              onChange={e => setCity(e.target.value)}
              >
              <option value=''>Não especificado</option>
              <option value='Recife'>Recife</option>
              <option value='Rio de Janeiro'>Rio de Janeiro</option>
            </select>
          </div>

          <div>
            <label>Bairro: </label>
            <select 
              value={neighborhood}
              onChange={e => setNeighborhood(e.target.value)}
              >
              <option value=''>Não especificado</option>
              <option value='Aflitos'>Aflitos</option>
              <option value='Espinheiro'>Espinheiro</option>
            </select>
          </div>

          <div>
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
          </div>

          <div>
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
          </div>

          <div>
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
          </div>

          <div>
            <button type='submit'onClick={console.log(filteredData)}>
              Pesquisar <FiSearch  />
            </button>
          </div>
        </form>
      </div>

      <div className='imoveis-container'>
        <ul>
          {filteredData
            .filter(produto => produto.cidade === city)
            // .filter(produto => produto.cidade === city &&
            //   produto.bairro === neighborhood && 
            //   produto.preco === price && 
            //   produto.quartos === bedrooms && 
            //   produto.tamanho === size) 
            .map(produto => (
            <Link to={`/imovel/${produto.id}`}> 
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

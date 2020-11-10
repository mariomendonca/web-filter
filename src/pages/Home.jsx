import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiCamera, FiAnchor } from 'react-icons/fi'

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

  function filteringData() {
    const filtering = data.filter(produto => (
      (city === '' ? produto.cidade : (produto.cidade === city))
      && (neighborhood === '' ? produto.bairro : (produto.bairro === neighborhood)) 
      && (bedrooms === '' ? produto.quartos : (produto.quartos === bedrooms)) 
      && (size === '' ? produto.tamanho : produto.tamanho === size) 
      && (price === '' ? produto.preco : produto.preco === price)
    ))

    setFilteredData(filtering)
  }

  function handleSearch(e) {
    e.preventDefault()

    const filteredItems = {
      city,
      neighborhood,
      size,
      price,
      bedrooms
    }

    filteringData()
    console.log(filteredItems)
  }

  return (
    <>
    <Header />
    <div className='container'>
      <div className='filter-container'>
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
              <option >Não especificado</option>
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
              <option value='100'>70- 120</option>
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
            <button type='submit'>
              Pesquisar <FiSearch  />
            </button>
          </div>
        </form>
      </div>

      <div className='imoveis-container'>
        <ul>
          {filteredData.length > 0 ? 
          filteredData.map(produto => (
            <Link to={`/imovel/${produto.id}`}> 
              <li key={produto.id}>
                <div className="image-container">
                  <img src={produto.images} alt="po"/>
                </div>
                
                <p className="info-container">
                  {produto.tipo}
                </p>

                <p className="endereco-container">
                  {produto.endereco}
                </p>

                <p className="regiao-container">
                {produto.bairro}, {produto.cidade}
                </p>

                <div className="icons-container">
                  <div className="first-icon">
                    <FiAnchor />
                    <span>
                      {produto.tamanho} m²
                    </span>
                  </div>
                  <div className="second-icon">
                    <FiCamera />
                    <span>
                      {produto.quartos} quartos
                    </span>
                  </div>
                </div>

                <div className="price-container">
                  R$ {produto.preco}
                </div>

              </li>
            </Link>
          )) : <h1>Opsss... Não temos um imovel com essas características, tente com outras</h1>}
        </ul>
      </div>

    </div>
    </>
  )
}

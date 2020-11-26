import React, { useState } from 'react'
import { FaSearch, FaTrashRestoreAlt} from 'react-icons/fa'

import FloatingMenu from '../components/FloatingMenu'
import Header from '../components/Header'

import data from '../data/data'
import Cards from '../components/Cards'
import Pagination from '../components/Pagination'

import '../styles/home.css'

export default function Home() {
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [bedrooms, setBedrooms] = useState('')

  const [filteredData, setFilteredData] = useState([...data])

  const [currentPage, setCurrentPage] = useState(1)
  const [ cardsPerPage ] = useState(8)

  //pagination
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFistCard = indexOfLastCard - cardsPerPage
  const currentCards = filteredData.slice(indexOfFistCard, indexOfLastCard)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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

  function savingToLocalStorage() {
    localStorage.setItem('city', city)
    localStorage.setItem('neighborhood', neighborhood)
    localStorage.setItem('bedrooms', bedrooms)
    localStorage.setItem('size', size)
    localStorage.setItem('price', price)
  }

  function cleaningData() {
    localStorage.clear()
    setCity('')
    setNeighborhood('')
    setBedrooms('')
    setPrice('')
    setSize('')
  }

  function handleSearch(e) {
    e.preventDefault()
    
    filteringData()
    savingToLocalStorage()

  }

  return (
    <>
    <Header />
    <div className='container'>
      <div className="image-background">
        <div className="background">
          <h1>Encontre o imóvel ideal para você e sua família!</h1>
          <p>Cansado de imobiliárias e procura por algo mais rápido e simples? <span> Prazer, <b>LOGO!</b></span></p>
          <div className='filter-container'>
            <form onSubmit={handleSearch}>
              <div>
                <label>Cidade: </label>
                <select 
                  id='cidade'
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  defaultValue={localStorage.city}
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
                  Pesquisar <FaSearch  />
                </button>
                <button type='reset' onClick={cleaningData}>
                  Limpar <FaTrashRestoreAlt />
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
    <div className="divisor-left">
    </div>
    <div className="divisor-right">
    </div>

      <div className='imoveis-container'>
        <Cards cards={currentCards} />
      </div>
      {filteredData.length > 8 ? 
      <Pagination cardsPerPage={cardsPerPage} totalCards={filteredData.length} paginate={paginate}/> 
       : <div></div>} 
      
    </div>
    <FloatingMenu />
    </>
  )
}

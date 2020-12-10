import React from 'react'
import { Link } from 'react-router-dom'
// import {  FiCamera } from 'react-icons/fi'
import { FaRulerCombined, FaBed } from 'react-icons/fa'
import { FiFrown } from 'react-icons/fi'

export default function Cards({ cards }) {
  return (
    <div>
      <ul>
        {cards.length > 0 ? 
        cards.map(produto => (
          <li key={produto.id}>
            <Link to={`/imovel/${produto.id}`}> 
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
                  <FaRulerCombined />
                  <span>
                    {produto.tamanho} m²
                  </span>
                </div>
                <div className="second-icon">
                  <FaBed />
                  <span>
                    {produto.quartos} quartos
                  </span>
                </div>
              </div>

              <div className="price-container">
                R$ {produto.preco}
              </div>

            </Link>
          </li>
          )) :
            <div class="not-found-container">
              <h5>
                Opsss... Não temos um ímovel com essas características, talvez o problema esteja nos filtros
              </h5>
              <FiFrown size="2.8rem" />
              
            </div> 
          }
        </ul>
    </div>
  )
}
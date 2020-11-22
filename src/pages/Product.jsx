import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaChevronCircleLeft, FaChevronCircleRight, FaMapMarkerAlt, FaRulerCombined, FaBed, FaBath } from 'react-icons/fa'

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import Header from '../components/Header'
import data from '../data/data'
import '../styles/product.css'


export default function Product() {
  const { id } = useParams()
  const imovel = data.filter(produto => produto.id == id)

  return (
    <>
      <Header />
          {imovel.map(produto => (
            <div>
              <div className="img-container">
                <img src={produto.images} alt=""/>
                <img src={produto.images} alt=""/>
                <img src={produto.images} alt=""/>

                <button id="leftArrow">
                  <FaChevronCircleLeft
                    size="2.5rem"
                    color="#aaa"
                    />
                </button>
                <button id="rightArrow">
                  <FaChevronCircleRight
                    size="2.5rem"
                    color="#aaa"
                    />
                </button>
              </div>
              <div className="containerr">
                <div className="left-container">
                  <div className="left">
                    <h1>Texto do título rs</h1>

                    <p className="address">
                      {produto.endereco} <FaMapMarkerAlt size="1.3rem" color="111" />
                    </p>

                    <p class="price">
                      Aluguel:  
                      <p>
                        R$ 1550
                      </p>
                      <span>
                        /mês
                      </span>
                    </p>
                    <p class="price">
                      Condomínio:  
                      <p>
                        R$ 250
                      </p>
                      <span>
                        /mês
                      </span>
                    </p>
                    <p class="price">
                      IPTU:  
                      <p>
                        R$ 150
                      </p>
                      <span>
                        /ano
                      </span>
                    </p>
                    <p class="price green">
                      Total:  
                      <p>
                        R$ {produto.preco}
                      </p>
                      <span>
                        /ano
                      </span>
                    </p>
                  </div>
                  <div className="right">
                    <div className="icon">
                      <FaRulerCombined />
                      {produto.tamanho} m²
                    </div>
                    <div className="icon">
                      <FaBed />
                      {produto.quartos} quartos
                    </div>
                    <div className="icon">
                      <FaBath />
                      1 banheiros
                    </div>
                  </div>

                </div>
                <div className="right-container">
                  <MapContainer
                    center={[-8.0446093, -34.8930231]}
                    zoom={15}
                    style={{ width: '100%', height: '100% '}}
                  >
                    <TileLayer 
                    // url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                    />
                  </MapContainer>
                </div>
              </div>
           </div>
          ))}
    </>
  )
}
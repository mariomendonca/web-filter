import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import Header2 from '../components/Header2'
import data from '../data/data'
import '../styles/product.css'


export default function Product() {
  const { id } = useParams()
  const imovel = data.filter(produto => produto.id == id)

  return (
    <>
      {console.log(imovel, id)}
      <Header2 />
      <div className="produto-container">
        <div className="imovel-container">
          {imovel.map(produto => (
          <div>
            <Link to='/'>
              <FiArrowLeft/> Voltar
            </Link>
            
            <p>{produto.bairro}, {produto.cidade}</p>
            <p>{produto.preco}</p>
            <p>{produto.tamanho}</p>
            <p>{produto.quartos}</p>
            <p>{produto.tipo}</p>
 

          </div>
          ))}
            <MapContainer
              center={[-8.0446093, -34.8930231]}
              zoom={15}
              style={{ width: '80%', height: '60% '}}
            >
              <TileLayer 
              // url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
            </MapContainer>
        </div>
      </div>
    </>
  )
}
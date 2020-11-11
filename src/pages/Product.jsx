import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
// import { MapContainer, TileLayer } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'

import Header from '../components/Header'
import data from '../data/data'
import '../styles/product.css'


export default function Product() {
  const { id } = useParams()
  const imovel = data.filter(produto => produto.id == id)

  return (
    <>
      {console.log(imovel, id)}
      <Header />
      <div className="produto-container">
        <h2>test {imovel[0].cidade}</h2>
        <Link to='/'>
          <FiArrowLeft/> Voltar
        </Link>

        {/* <MapContainer
          center={[-8.0504581, -34.8952614]}
          zoom={15}
          style={{ width: '100%', height: '100% '}}
        >
          <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
        </MapContainer> */}
      </div>
    </>
  )
}
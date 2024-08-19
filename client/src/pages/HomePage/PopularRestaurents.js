import React from 'react'
import './PopularRestaurent.css'

function PopularRestaurents(props) {

  const {PopularRestaurents} = props

  const {imageURL,title,time,address} = PopularRestaurents
  return (
    <div>
       <div className="pop-res-card shadow p-3 mb-3 mt-5 ">
            <img className="pop-res-card-img" src={imageURL} alt=""/>
            <h1 className="pop-res-card-title">{title}</h1>
            <hr/>
            <p className="pop-res-card-time">{time}</p>
            <p className="pop-res-card-address">{address}</p>
        </div>

    </div>
  )
}

export default PopularRestaurents
import millify from 'millify'
import React from 'react'

const CardView = ({coin}) => {
  return (
    <div className='coin-card d-flex flex-column justify-content-between border rounded p-3'>
      <div>
        <h3>{coin.name}</h3>
        <h6>{coin.symbol}</h6>
        <p>${millify(coin.priceUsd)}</p>
      </div>
      <p className='d-flex flex-column '>
        <span>Günlük Değişim:</span>
        <span className={coin.changePercent24Hr >0 ? 'up' : 'down'}>
            % {Number(coin.changePercent24Hr).toFixed(2)}</span>
      </p>
    </div>
  )
}

export default CardView

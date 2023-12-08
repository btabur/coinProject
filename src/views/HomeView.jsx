import React from 'react'
import {FaBitcoin} from 'react-icons/fa'
import millify from 'millify'
import CardView from './CardView'
import LoadMoreButtonController from '../controllers/LoadMoreButtonController'
const HomeView = ({coins}) => {
  return (
    <div className='container-xl mt-5'>
      <h4 className='d-flex align-items-center gap-3'>
        <FaBitcoin/>
        <span>Hoş Geldiniz Coin Listesi</span>
      </h4>
      <p>
      Coin Listesi, dünya genelindeki kripto para birimlerini ve
        dijital varlıkları takip etmek için mükemmel bir kaynaktır
      </p>
      <div className='d-flex gap-4 justify-content-around '>
        {coins.slice(0,3).map((coin,i)=> (
          <CardView key={i} coin={coin}/>
        ))}
      </div>
      <table className='table table-dark table-hover mt-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>coin</th>
            <th>fiyat</th>
            <th>Market Hacmi</th>
            <th>İşlem Hacmi</th>
            <th>% Değişim (24sa)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin,i)=> (
            <tr key={i}>
              <td>{coin.rank}</td>
              <td className='d-flex'>
                <span className='text-warning fw-bold me-2'>{coin.symbol}</span>
                <span className='text-nowrap text-truncate'>{coin.name}</span>
              </td>
              <td>${millify(coin.priceUsd)}</td>
              <td>${millify(coin.marketCapUsd)}</td>
              <td>${millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr >0 ? 'up' : 'down'}>
                {millify(coin.changePercent24Hr)} % </td>
            </tr>
          ))}
        </tbody>
      </table>
      <LoadMoreButtonController/>
    </div>
  )
}

export default HomeView

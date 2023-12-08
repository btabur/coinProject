import React from 'react'

const LoadMoreButtonView = ({handleClick}) => {
  return (
   <div className='d-flex justify-content-center my-5'>
     <button onClick={handleClick} className="btn" type="button">
    <strong>Daha Fazla</strong>
    <div id="container-stars">
      <div id="stars"></div>
    </div>
  
    <div id="glow">
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </button>
   </div>
  
  )
}

export default LoadMoreButtonView

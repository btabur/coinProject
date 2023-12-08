import React from 'react'
import LoadMoreButtonView from '../views/LoadMoreButtonView'
import { useSearchParams } from 'react-router-dom'

const LoadMoreButtonController = () => {
    const [params,setParams] = useSearchParams()
    const handleClick = ()=> {
      //url deki page parametresini al
        const pageNumber = params.get('page') || 1 ;

        //url güncelle ve sayfa değerini 1 artır
        setParams({page: +pageNumber+1 })
    }
  return (
   <LoadMoreButtonView handleClick={handleClick}/>
  )
}

export default LoadMoreButtonController

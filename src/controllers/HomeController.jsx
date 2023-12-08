import React, { useEffect, useState } from 'react'
import HomeView from '../views/HomeView'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';

const HomeController = () => {
  const [coins,setCoins] = useState([]);
  const [queryParams,setParams] =useSearchParams()

  const page = Number(queryParams.get('page') || 1)

  const params = {
    limit:15, //gelecek eleman sınır
    offset:(page -1)*15  //atlanacak eleman sayısı
  }
  useEffect(()=> {
  
    axios.get('/assets',{params})
   // .then((res)=> setCoins([...coins, ...res.data.data]))
    .then((res)=> setCoins(coins.concat(res.data.data)))
    .catch((err)=> console.log(err))
  },[queryParams])
  return  <HomeView coins = {coins}/>
}

export default HomeController

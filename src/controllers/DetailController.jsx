import React, { useEffect, useState } from 'react'
import Detailview from '../views/Detailview'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { DetailModel } from '../models/DetailModel'

const DetailController = () => {

  const {id} = useParams()
  const [coin,setCoin] = useState(null)
  const [history,setHistory]=useState(null)

  useEffect(()=> {
    axios.get(`/assets/${id}`)
    .then((res)=> setCoin(res.data.data))

    axios.get(`/assets/${id}/history?interval=d1`)
    .then((res)=> setHistory(res.data.data))
  },[])
  const model = new DetailModel(coin,history)


  return <Detailview model ={model} coin={coin}/>
}

export default DetailController

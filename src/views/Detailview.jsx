import millify from 'millify'
import React from 'react'
import {Chart as ChartJs} from 'chart.js/auto'
import {Line, Bar} from 'react-chartjs-2'

const Detailview = ({model,coin}) => {
  return (
    <div>
      <h3 className='text-center'>
        <span className='me-3 fs-4 fw-bold'>{coin?.symbol}</span>
        <span className='fs-3 text-warning '>{coin?.name}</span>
      </h3>
      <div className='row'>
        {/* bilgiler */}
        <section className='col-md-3 d-flex flex-column gap-5 p-5 p-md-2'>
          {model.infoFields.map((data)=> (
            <div className='text-bg-light rounded shadow-lg text-center py-4 px-2 d-flex flex-column  gap-2'>
              <span className='fs-2'>{data.icon}</span>
              <h3>{data.label}</h3>
              <p>{millify(data.value)}</p>
            </div>
          ))}
        </section>

        {/* istatistikler */}
        <section className='col-md-9'>
          <Line 
          data={model?.chartData}
          />
          <Bar 
          data = {model?.chartData}
          />
        </section>
      </div>
      
    </div>
  )
}

export default Detailview

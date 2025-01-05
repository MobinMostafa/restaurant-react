import React from 'react'

const MenuItem = props => {
    console.log(props)
  return (
    <div className='col-md-3'> 
    <div className='card p-2 mb-4'>
      <div className="card-title text-center">
        <img src={props.dish.image} alt={props.dish.name} width={150}/>
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{cursor: "pointer"}} onClick={props.DishSelect}>{props.dish.name}</h5>
        {/* <p className="card-text">{props.dish.description}</p> */}
        <p className="card-text fw-bold">$ {props.dish.price}</p>
      </div>
    </div>
    </div>
  )
}

export default MenuItem
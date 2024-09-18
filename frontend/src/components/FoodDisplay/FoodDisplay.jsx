import React, { useContext } from 'react'
import './FoodDisplay.css'
import { storeContext } from '../../context/storeContext'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(storeContext)

  return (
    <div className='food-delivery' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                return
            })}
        </div>
    </div>
  )
}

export default FoodDisplay

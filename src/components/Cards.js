import React from 'react'
import CardItem from './CardItem'
import "./Card.css"
import im2 from "../imges/img-2.jpg"
import im3 from "../imges/img-3.jpg"
import im4 from "../imges/img-4.jpg"
import im8 from "../imges/img-8.jpg"
import im9 from "../imges/img-9.jpg"

function Cards() {
  return (
    <div className='cards'>
        <h2 className='cardH'>Check out these EPIC Destinations</h2>
        <div className='cards-con'>       
          <div className='cards-warpper'>
            <ul>
              <CardItem
              src={im9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle "
              path="/services"                
              />
              <CardItem
              src={im2}
              text="Travel through the Tslands of bali in a private  Cruise "
              path="/services"
              />
            </ul>
            <ul>
              <CardItem
              src={im3}
              text="Set Sail in the Atlantic Ocean visiting UNcharted waters "
              path="/services"
              />
              <CardItem
              src={im4}
              text="Experience Football on Top of the Himilayan Mountauns "
              path="/products"
              />
              <CardItem
              src={im8}
              text="Ride throught the sahara Desert on guided camel tour"
              path="/Sign"
              />
             </ul>   
          </div>
        </div>
    </div>
  )
}

export default Cards

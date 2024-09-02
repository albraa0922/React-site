import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
        <li>
            <Link className='cadrs-link' to={props.path}>
                <figure className='card-warp'>
                    <img className='cads-img' src={props.src} alt='Travle imge'/>
                    <div className='cards-Info'>
                        <h5>{props.text}</h5>
                    </div>
                </figure>
            </Link>
        </li>
    </>
  )
}

export default CardItem

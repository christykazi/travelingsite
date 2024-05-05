import React, {useEffect} from 'react'
import './main.css'
import img from "../../images/airport(1).jpg"
import img2 from "../../images/cartravel(2).jpg"
import img3 from "../../images/peotravel(3).webp"
import img4 from "../../images/rocktravel(4).jpg"
import img5 from "../../images/travel(5).jpg"
import img6 from "../../images/naturetravel(6).webp"
import img7 from "../../images/dogtravel(7).jpg"
import img8 from "../../images/birdtravel(8).jpg"
import img9 from "../../images/lakeravel(9).jpg"


import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    desTitle: 'Bora Bora',
    location: "New Zealand",
    grade : 'CULTURAL RELAX',
    fees: '$700',
    description: 'The opitiome of romance, Bora Bora is one of the best travel destinations in the world. The place is know for its luxurious stays and adenturus activities.'
  },

  {
    id: 2,
    imgSrc: img2,
    desTitle: 'Machu Picchu',
    location: "Peru",
    grade : 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna Picchu is a moutain in peru, rising over Machuu Picch, the so-called of incas. this place is popular among tourists as the sunrise from the Sun Gate is simply spactacular. '
  },

  {
    id: 3,
    imgSrc: img3,
    desTitle: 'Great Barrier Reef',
    location: "Australia",
    grade : 'CULTURAL RELAX',
    fees: '$500',
    description: 'One of the most remarkable Austialian gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place. '
  },

  {
    id: 4,
    imgSrc: img4,
    desTitle: 'cappaddocia',
    location: "Turkey",
    grade : 'CULTURAL RELAX',
    fees: '$800',
    description: 'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about The place is know for its luxurious stays and adenturus activities.'
  },

  {
    id: 5,
    imgSrc: img5,
    desTitle: 'cappaddocia',
    location: "Turkey",
    grade : 'CULTURAL RELAX',
    fees: '$800',
    description: 'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about The place is know for its luxurious stays and adenturus activities.'
  },

  {
    id: 6,
    imgSrc: img6,
    desTitle: 'Cinque Terre',
    location: "Itay",
    grade : 'CULTURAL RELAX',
    fees: '$840',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of the place. Also, if you are a foodie and love seafood, you will be exilarated with the choice you are about to get here. Happy exploring great food. '
  },

  {
    id: 7,
    imgSrc: img7,
    desTitle: 'Angkor-Wat',
    location: "Cambodia",
    grade : 'CULTURAL RELAX',
    fees: '$790',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of the place. Also, if you are a foodie and love seafood, you will be exilarated with the choice you are about to get here. Happy exploring great food. '
  },

  {
    id: 8,
    imgSrc: img8,
    desTitle: 'Taj Mahal',
    location: "Itay",
    grade : 'CULTURAL RELAX',
    fees: '$840',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of the place. Also, if you are a foodie and love seafood, you will be exilarated with the choice you are about to get here. Happy exploring great food. '
  },

  {
    id: 9,
    imgSrc: img9,
    desTitle: 'Bali Island',
    location: "Indonesia",
    grade : 'CULTURAL RELAX',
    fees: '$500',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of the place. Also, if you are a foodie and love seafood, you will be exilarated with the choice you are about to get here. Happy exploring great food. '
  },
  
]
const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
      }, [])

  return (
  <section className='main container section'>
<div className="secTitle">
  <h3  data-aos="fade-right" className="title">
    Most visted destinations
  </h3>
</div>

<div className="secContent grid">
{
  Data.map(({id, imgSrc, desTitle, location, grade, fees, description})=>{
return(
  <div key={id} 
  data-aos="fade-up" 
   className='singleDestination'> 
  <div className="imageDiv">
    <img src={imgSrc} alt={desTitle} />
  </div>

  <div className="cardInfo">
    <h4 className='desTitle'>{desTitle}</h4>
    <span className='continent flex'>
      <HiOutlineLocationMarker className='icon'/>
      <span className='name'>{location}</span>
    </span>

    <div className="fees flex">
      <div className="grade">
        <span>{grade}<small>+1</small></span>
      </div>
      <div className="price">
        <h5>{fees}</h5>
      </div>
    </div>

    <div className="desc">
      <p>{description}</p>
    </div>

    <button className="btn flex">
      DETAILS
       <HiOutlineClipboardCheck
        className= "icon" />
    </button>
  </div>
  </div>
)
  })
}
</div>
  </section>
  )
}

export default Main
import React from 'react'
import './main.css'
import img from "../../images/airport(1).jpg"


import { HiOutlineLocationMarker } from 'react-icons/hi'
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

  // {
  //   id: 2,
  //   imgSrc: img2,
  //   desTitle: 'Machu Picchu',
  //   location: "Peru",
  //   rade : 'CULTURAL RELAX',
  //   feess: '$600',
  //   description: 'Huayna Picchu is a moutain in peru, rising over Machuu Picch, the so-called of incas. this place is popular among tourists as the sunrise from the Sun Gate is simply spactacular. '
  // },

  // {
  //   id: 3,
  //   imgSrc: img3,
  //   desTitle: 'Great Barrier Reef',
  //   location: "Australia",
  //   rade : 'CULTURAL RELAX',
  //   feess: '$500',
  //   description: 'One of the most remarkable Austialian gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place. '
  // },

  // {
  //   id: 4,
  //   imgSrc: img4,
  //   desTitle: 'cappaddocia',
  //   location: "Turkey",
  //   rade : 'CULTURAL RELAX',
  //   feess: '$800',
  //   description: 'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about The place is know for its luxurious stays and adenturus activities.'
  // },

  // {
  //   id: 5,
  //   imgSrc: img5,
  //   desTitle: 'Guanajuato',
  //   location: "Mexico",
  //   rade : 'CULTURAL RELAX',
  //   feess: '$1100',
  //   description: 'A city in central Mexico, Guanjuto is known for its history of silver mining and colonial architecture. The house in the city are very attractively painted with the most bright colors available. Always welcome. '
  // },

  // {
  //   id: 6,
  //   imgSrc: img6,
  //   desTitle: 'Cinque Terre',
  //   location: "Itay",
  //   rade : 'CULTURAL RELAX',
  //   feess: '$840',
  //   description: 'The vibrant hues of the houses are its benchmark and explain the beauty of the place. Also, if you are a foodie and love seafood, you will be exilarated with the choice you are about to get here. Happy exploring great food. '
  // },

  // {
  //   id: 7,
  //   imgSrc: img7,
  //   desTitle: 'Angkor-Wat',
  //   location: "Cambodia",
  //   rade : 'CULTURAL RELAX',
  //   feess: '$790',
  //   description: 'The vibrant hues of the houses are its benchmark and explain the beauty of the place. Also, if you are a foodie and love seafood, you will be exilarated with the choice you are about to get here. Happy exploring great food. '
  // },

  // {
  //   id: 8,
  //   imgSrc: img8,
  //   desTitle: 'Taj Mahal',
  //   location: "Itay",
  //   rade : 'CULTURAL RELAX',
  //   feess: '$840',
  //   description: 'The vibrant hues of the houses are its benchmark and explain the beauty of the place. Also, if you are a foodie and love seafood, you will be exilarated with the choice you are about to get here. Happy exploring great food. '
  // },

  // {
  //   id: 9,
  //   imgSrc: img9,
  //   desTitle: 'Bali Island',
  //   location: "Indonesia",
  //   grade : 'CULTURAL RELAX',
  //   fees: '$500',
  //   description: 'The vibrant hues of the houses are its benchmark and explain the beauty of the place. Also, if you are a foodie and love seafood, you will be exilarated with the choice you are about to get here. Happy exploring great food. '
  // },
  
]
const Main = () => {
  return (
  <section className='main container section'>
<div className="secTitle">
  <h3 className="title">
    Most visted destinations
  </h3>
</div>

<div className="secContent grid">
{
  Data.map(({id, imgSrc, desTitle, location, grade, fees, description})=>{
return(
  <div key={id} className='singleDestination'> 
  <div className="imageDiv">
    <img src={imgSrc} alt={desTitle} />
  </div>

  <div className="cardInfo">
    <h4 className='desTitle'>{desTitle}</h4>
    <span className='continent flex'>
      <HiOutlineLocationMarker className='icon'/>
    </span>
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
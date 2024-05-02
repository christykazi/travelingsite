import React from 'react'
import "./home.css"
import { GrLocation } from 'react-icons/gr'


const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src="https://cdn.pixabay.com/video/2023/09/24/182082-867762198_tiny.mp4" muted autoPlay loop
       type='video/mp4 '></video>

       <div className="homeContent container">
<div className="textDiv">
  <span className="smallText">Our Packages</span>
  <h1 className="homeTitle">Search you Holiday</h1>
</div>

<div className="cardDiv grid">
  <div className="destinationInput">
    <label htmlFor="city">Search your destination: </label>
  <div className="input flex">
    <input type="text" placeholder='Enter name here....' />
    <GrLocation className='icon'/>
  </div>
  </div>


<div className="dateInput">
    <label htmlFor="date">Select your date: </label>
  <div className="input flex">
    <input type="date"/>
  </div>
</div>


<div className="priceInput">
<div className="label_total flex">  
    <label htmlFor="price">Max price:</label>
    <h3 className='total'>$5000</h3>
    </div>
  <div className="input flex">
    <input type="range" max="5000" min="1000"/>
    
  </div>
</div>
<div className="searchOptions flex">
  <span>More Filters</span>
</div>
</div>
       </div>
    </section>
  )
}

export default Home
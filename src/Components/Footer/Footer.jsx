import React from 'react'
import "./footer.css"
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'


const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="videoDiv">
          <video src="https://cdn.pixabay.com/video/2021/02/18/65560-515098344_tiny.mp4" loop autoPlay muted type="video/mp4">
          </video>
        </div>

        <div className="secContent container">
          <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>  

          <div className="inputDiv flex">
          <input type="text" placeholder='Enter Email Address' />
          <button className='btn flex' type='submit'>
          SEND
            <FiSend className='icon'/>
          </button>
          </div>


          </div>

          <div className="footerCard flex ">
  <div className="footerIntro flex">
    <div className="logoDiv">
      <a href="#" className='logo flex'>
        <MdOutlineTravelExplore className='icon' /> Travel.
      </a>
    </div>

    <div className="footerParagraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aliquam consequuntur autem est non provident iusto a voluptatum sit labore asperiores enim, nulla unde quia voluptatibus ipsa, excepturi dolorem possimus?
    </div>

    <div className="footerSocials">
      <AiOutlineTwitter className='icon'/>     
      <AiFillInstagram className='icon'/>
      <AiFillYoutube className='icon'/>
      <FaTripadvisor className='icon'/>
    </div>
  </div> 

  <div className="footerLinks grid">
  
 {/*  one */}
    <div className="linkGroup">
      <span className="groupTitle">
        OUR AGENCY
      </span>
    
      <li className='footerList flex'> <FiChevronRight className='icon' /> Services</li>                 
      <li className='footerList flex'> <FiChevronRight className='icon' /> Insurance</li>          
      <li className='footerList flex'> <FiChevronRight className='icon' /> Agency</li>         
      <li className='footerList flex'> <FiChevronRight className='icon' />Tourism</li>     
      <li className='footerList flex'><FiChevronRight className='icon' />Payment</li>
    </div>
  
  
 {/*  two */}
    <div className="linkGroup">
      <span className="groupTitle">
        OUR AGENCY
      </span>
    
      <li className='footerList flex'> <FiChevronRight className='icon' /> Bookings</li>                 
      <li className='footerList flex'> <FiChevronRight className='icon' /> RentalCars</li>          
      <li className='footerList flex'> <FiChevronRight className='icon' /> Hotelword</li>         
      <li className='footerList flex'> <FiChevronRight className='icon' />Trivago</li>     
      <li className='footerList flex'><FiChevronRight className='icon' />TripAdvisor</li>
    </div>
  

  {/* three */}

    <div className="linkGroup">
      <span className="groupTitle">
        LAST MINUTES
      </span>
    
      <li className='footerList flex'> <FiChevronRight className='icon' /> London</li>             
      <li className='footerList flex'> <FiChevronRight className='icon' />California </li>        
      <li className='footerList flex'> <FiChevronRight className='icon' />Europe </li>         
      <li className='footerList flex'> <FiChevronRight className='icon' />Indonesia</li>     
      <li className='footerList flex'><FiChevronRight className='icon' />Oceania</li>
    </div>
  </div>

<div className="footerDiv flex">
  <small>BEST TRAVEL WEBSITE THEME</small>
  <small>COPYRIGHTS RESERVED- CHRISTIANA 2024</small>
</div>
</div>

       </div>               
      </section>
    </>
  )
}

export default Footer
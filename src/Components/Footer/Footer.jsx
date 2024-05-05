import React from 'react'

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="videoDiv">
          <video src="https://cdn.pixabay.com/video/2021/02/18/65560-515098344_tiny.mp4" loop autoPlay muted type="video/mp4">
          </video>
        </div>
        <div className="seContent container">
          <div className="contactDiv flex">
          <div className="text">
            <small></small>
          </div>  
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
import React from 'react'
import './Proslader.css'
import product01new from '../../assets/product01new.jpg'
import product02new from '../../assets/product04new.png'
import product03new from '../../assets/product10new.jpg'
const Proslader = () => {
  return (
    <div className="app">
    <figure>
      <img src={product01new} alt="Mountains" />
      <figcaption><h3>STONE WOOL <br />BLANKET</h3><h6>SHREEINSUL <br />STONE WOOL BLANKET <br /> (LRB MATTRESS) <br /> <button>More</button></h6></figcaption>
    </figure>
    <figure>
      <img src={product02new} alt="Mountains" />
      <figcaption><h3>Ceramic Fiber <br /> Cloth</h3><h6>Shreeinsul <br /> Ceramic Fiber Cloth <br /> And Tape <br /> <button>More</button></h6></figcaption>
    </figure>
    <figure>
      <img src={product02new} alt="Mountains" />
      <figcaption><h3>Ceramic Fiber <br /> Cloth</h3><h6>Shreeinsul <br /> Ceramic Fiber Cloth <br /> And Tape <br /> <button>More</button></h6></figcaption>
    </figure> 
  </div>
  )
}

export default Proslader

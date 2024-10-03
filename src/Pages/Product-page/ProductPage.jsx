// import React from 'react'
import './ProductPage.css'
// import midimg from '../../assets/mid-imae.jpg'
import { Link } from 'react-router-dom'
// import CounterSection from '../../Components/Counter/CounterSection'
import product01new from '../../assets/product01new.jpg'
import product02new from '../../assets/product02new.jpg'
// import product04new from '../../assets/product04new.png'
// import product03new from '../../assets/product03new.jpg'
// import product05new from '../../assets/product05new.png'
// import product06new from '../../assets/product06new.jpg'
// import product07new from '../../assets/product07new.png'
// import product08new from '../../assets/product08new.jpg'
// import product09new from '../../assets/product09new.jpg'
// import product10new from '../../assets/product10new.jpg'
import Phome from '../../Components/Producthome/Phome'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Slider from '../../Components/Slider/Slider'

const ProductPage = () => {

  useGSAP(
    () => {
      // gsap code here...
      gsap.from('.product-title p , .product-title h1', {
        scrollTrigger: {
          trigger: '.product-title',
          start: '20% bottom',
          // markers: true
        },
        opacity: 0,
        // scale: 2,
        y: -30,
        duration: 0.5,
        stagger: 0.5,
        // ease: 'power2.inOut'
      });
      gsap.from('.product-card-one', {
        scrollTrigger: {
          trigger: '.product',
          start: '10% bottom',
          // markers: true,
        },
        opacity: 0,
        scale: 0.8,
        // y: -60,
        duration: 0.5,
        stagger: 0.3,
        // ease: 'power2.inOut'
      });
    },);

  const productList = [
    {
      categoryId: 1,
      categoryName: "Shreeinsul Stone Wool Products",
      categoryProducts: [
        {
          id: 1,
          image: 'https://res.cloudinary.com/dwvxuesrd/image/upload/v1727946804/shreeinsul/products/LRB%20Mattress/tdlzml0hablf6ncaxa7g.jpg',
          name: 'Shreeinsul Blanket',
          description: 'Shreeinsul Lightly Resin Bonded (LRB) Blankets offers an advanced solution for insulation needs, combining exceptional thermal efficiency with flexibility for different surface shapes and sizes. These matteresses are made  of molten stone wool fibres bonded by a suitable resin and then stitching with GI wire mesh. This material complies to ASTM C592 & IS 8183',
          link: '/products/lrb'
        },
        {
          id: 2,
          image: product02new,
          name: 'Shreeinsul Boards',
          description: 'Shreeinsul Lightly Resin Bonded (LRB) Blankets offers an advanced solution for insulation needs, combining exceptional thermal efficiency with flexibility for different surface shapes and sizes. These matteresses are made  of molten stone wool bonded by a suitable resin and then stitching with GI wire mesh. This material complies to ASTM C592 & IS 8183',
          link: '/products/slabs-and-boards'
        },
        {
          id: 3,
          image: product02new,
          name: 'Shreeinsul Sectional Pipe Covers',
          description: 'Shreeinsul Sectional Pipe Covers (SPC) offers a quick solution for insulation needs, combining exceptional dimensional stability with durability and tuffness. These SPCs are made from long non-combustible rock fibres bonded with thermosetting resin binders. The SPC\'s are available plain or with FSK facings. This material conforms to ASTM C547 & IS 9842',
          link: '/products/sectional-pipe-covers'
        },
        {
          id: 4,
          image: product02new,
          name: 'Shreeinsul Building Rolls',
          description: 'Shreeinsul Resin Bonded Roll With facings like Aluminium Foil (FSK), Black Glass Tissue viel (BGT) and White Glass Tissue veil (WGT). Are used for roof & wall insulation for thermal & acoustic properties. Building Rolls are generally used under or over the purlins in PEB & Pre Engineered houses, cold storages, Poultry forms. These are also used for HVAC application. And conforming to IS:8183:1993, ASTM C 612, BS:3958 (Part - 4) & EN:14303:2013.',
          link: '/products/building-rolls'
        },
        {
          id: 5,
          image: product02new,
          name: 'Shreeinsul Lamella Batts ',
          description: 'Shreeinsul Lamella Batts are used in sandwich panels, sandwich Doors for thermal insulation and pressure resistance. Lamella Batts are placed between two metal sheets for used in the partitions, Roof panels. These are also used in cold storage rooms. Lamella Batts conforming to IS:8183:1993, ASTM C 612, BS:3958 (Part - 4) & EN:14303:2013.',
          link: '/products/lamella-batts'
        },
        {
          id: 6,
          image: product02new,
          name: 'Shreeinsul Loose Wool',
          description: 'Loose wool insulation, also known as loose-fill wool insulation, is an eco-friendly insulation material made from natural rocks like basalt. Provides excellent thermal resistance, sound absorption, fire-resistant and ideal for filling cavity and un-even surface',
          link: '/products/loose-wool'
        },
      ]
    },
    {
      categoryId: 2,
      categoryName: "ShreeCera Textile Products",
      categoryProducts: [
        {
          id: 1,
          image: product01new,
          name: 'Shreeinsul Ceramic Yarn Braided Rope',
          description: 'ShreeCera Yarn Braided Ropes are made from Ceramic fiber Yarn braided with the inner core of SS wire or FG yarn reinforced for additional strength to give excellent handling strength. These ropes are manufactured from high performance ceramic fibers. ShreeCera Ceramic ropes are high temperature resistance. ShreeCera ropes are made from long ceramic (fibers more than 200mm) coupled with SS wire to improve the strength (Tensile Strength). These ropes  contain 10 - 12% organic carrier which helps to establish physical formation of products and burns out at about 400° C.',
          link: '/products/yarn-braided-ropes'
        },
        {
          id: 1,
          image: product01new,
          name: 'Shreeinsul Ceramic twisted Rope',
          description: 'ShreeCera Twisted ropes are made of Superior Quality Ceramic fiber yarn reinforced with fiber glass / ss wire / both SS wire & fiber glass yarn. ShreeCera ropes are light weight and high temperature resistance. These ropes are made of long ceramic fibers twisted together to improve the strength for pulling and connecting. These ropes contain some quantum of organic carrier which helps to establish physical formation of products which charred out at higher temperature.',
          link: '/products/twisted-ropes'
        },
        {
          id: 1,
          image: product01new,
          name: 'Shreeinsul Ceramic Yarn',
          description: 'ShreeCera Ceramic fiber Yarn are made from high quality Alumino silicate fibers with reinforcement of SS wire / continuous fiberglass filament to increase  handling strength during installation and enhance fiber durability. The fiberglass reinforcement has temperature rating of 650°C. These yarns are contain 15%  organic carrier which helps to establish physical formation of products. ShreeCera Ceramic fiber yarns are manufactured using advance technology and machinery of carding, spinning and doubling system. ',
          link: '/products/yarns'
        },
        {
          id: 1,
          image: product01new,
          name: 'Shreeinsul Ceramic Cloth & tape',
          description: 'Shreecera Cloth/Tape are woven from Superior Quality ceramic fiber yarn and reinforced with Fiberglass/SS wire.  Cloth and Tapes have high temperature resistance. These cloths contain specific quantum of organic carrier which helps to establish physical formation of products which charred out at higher temperature. The continuous withstand temperature of the cloth & Tape is 1000° C',
          link: '/products/cloth-tape'
        },
      ]
    },
    {
      categoryId: 3,
      categoryName: "Shree Foam PIR /PUF Products",
      categoryProducts: [
        {
          id: 1,
          image: product01new,
          name: 'Polyisocyanurate Foam (PIR)',
          description: 'ShreeFoam PIR CFC and HCFC free rigid insulation foam products having operating temperature range from -200°C to +150°C. ShreeFoam PIR foams are available in slab, pipe section and a choice of profiles & blocks. These are prefabricated using CNC machines from Free rise buns made in discontinous process. These foams are special purpose high strength insulating material adequate for low temperature installations as in LNG/LPG Pipelines & Equipments.',
          link: '/products/pir'
        },
        {
          id: 2,
          image: product01new,
          name: 'Polyurethane Foam (PUF)',
          description: 'ShreeFoam rigid polyurethane foams have been successfully used for many years in the oil and gas industry for service temperatures of up to 110°C. This material is resistant to water ingress, provides much better insulation values than many other insulation materials and also offers structural support of the pipeline due to its high compressive strength. A polyurethane is polymer composed of a chain of organic units joined by carbamate (urethane) links.',
          link: '/products/puf'
        },
        {
          id: 3,
          image: product01new,
          name: 'High Density PUF/PIR Supports',
          description: 'ShreeFoam offers a wide range of PUF supports. The density of PUF support ranges from 80 kg/m3 to 500 kg/m3. The higher density PUF supports can be made available against specific customer requirements. Shree Foam high density supports enable higher loads without increase in surface area. Shree Foam supports do not require sawing and shaping at site, the supports designed to suit exact pipe OD. Shree Foam supports are having excellent closed cell structure and it does not permit water / water vapour penetration.',
          link: '/products/puf-pir-support'
        },
      ]
    },
    {
      categoryId: 4,
      categoryName: "Moisture Barrier Lamination ",
      categoryProducts: [
        {
          id: 1,
          image: product01new,
          name: 'PolySurlyn Lamination ',
          description: 'We Provide heat sealed 3-mil thick PolySurlyn Laminated Weather Protection Jacketing in accordance with EIL specifications and conforming to ASTM C1729. PolySurlyn Lamination acts as a brilliant moisture barrier and prevents corrosion on the inner surface of the cladding and onto the insulated surface.',
          link: '/products/polySurlyn-lamination'
        },
        {
          id: 2,
          image: product01new,
          name: 'Polykraft Lamination',
          description: 'We also provide Polykraft moisture barrier consisting of one layer of 1 mil high density polyethylene film with a protective layer of 40-pound minimum virgin Kraft paper heat laminated on the weather protection cladding inside our factory. This product compiles with EIL specifications and provides excellent protection to the cladding material.',
          link: '/products/polykraft-lamination'
        },
        {
          id: 3,
          image: product01new,
          name: 'Profiled Weather Protection Jacketing',
          description: 'Our State-of-the-art facility can provide Corrugated Aluminium, SS & GI sheets with 32/5 & 76/19 profiles. Lengths of the corrugated material can be customised as per the customer\'s requirements. We are capable to do profiling on thicknesses varying from 0.4 mm to 1.22 mm depending upon the nature of the material. Profiled sheets are also available with moisture barrier protective laminations.',
          link: '/products/profiled-weather-protection-jacketing'
        }
      ]
    }
  ]

  return (
    <>
      <Phome />
      <div className="product">
        <div className="product-main-container">

          <div className="product-title">
            <p>--LATEST--</p>
            <div>
              {productList.map((category) => (
                <div key={category.categoryId}>
                  <h1>{category.categoryName}</h1>
                  <div className="product-cards">
                    {category.categoryProducts.map((product, index) => (
                      <Link to={product.link} key={index} className="product-card-one">
                        <div className="product-card-one">
                          <div className="product-card-img">
                            <img src={product.image} alt={product.name} />
                          </div>
                          <div className="product-card-text">
                            <h2>{product.name}</h2>
                            <p className="product-description">{product.description}</p>
                            <button className="card-btn">Click</button>
                            <hr />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
        <div className="products-page-countdown">
          {/* <CounterSection /> */}
          <Slider />
        </div>
      </div>
    </>
  )
}

export default ProductPage
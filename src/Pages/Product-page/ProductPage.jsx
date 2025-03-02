import React, { lazy, Suspense, useMemo } from 'react'
import './ProductPage.css'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import Phome from '../../Components/Producthome/Phome'

// Lazy load large components like Slider
const Slider = lazy(() => import('../../Components/Slider/Slider'))

const ProductPage = () => {

  const productList = useMemo(() => ([

    {
      "categoryId": 1,
      "categoryName": "Shreeinsul Stone Wool Products",
      "categoryProducts": [
        {
          "id": 1,
          "image": "https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_400,c_scale,q_auto,f_auto/v1731049681/shreeInsul/PNG/b5f6ygv1nrhrpf8rzvyj.png",
          "name": "Shreeinsul Blanket ",
          "description": "Shreeinsul Lightly Resin Bonded (LRB) Blanket offers an advanced solution for insulation needs, combining exceptional thermal efficiency with flexibility for different surface shapes and sizes. These matteresses are made  of molten stone wool fibres bonded by a suitable resin and then stitching with GI wire mesh. This material complies to ASTM C592 & IS 8183",
          "link": "/products/lrb"
        },
        {
          "id": 2,
          "image": "https://res.cloudinary.com/dcsentl2f/image/upload/w_300,h_300,c_scale,q_auto,f_auto/v1731049687/shreeInsul/PNG/z4c2r682f1b9scegfyay.png",
          "name": "Shreeinsul Boards",
          "description": "Shreeinsul Stone Wool Resin Bonded Boards and Slabs are produced from loose stone wool and bonded with resin to form a robust and versatile insulation material. This unique composition results in a product that excels in thermal properties, sound absorption, and fire resistance.",
          "link": "/products/slabs-and-boards"
        },
        {
          "id": 3,
          "image": "https://res.cloudinary.com/dcsentl2f/image/upload/w_500,h_400,c_scale,q_auto,f_auto/v1731049681/shreeInsul/PNG/ovpbmzfl02pd6uahncex.png",
          "name": "Shreeinsul Sectional Pipe Covers",
          "description": "Shreeinsul Sectional Pipe Covers (SPC) offers a quick solution for insulation needs, combining exceptional dimensional stability with durability and tuffness. These SPCs are made from long non-combustible rock fibres bonded with thermosetting resin binders. The SPC's are available plain or with FSK facings. This material conforms to ASTM C547 & IS 9842",
          "link": "/products/sectional-pipe-covers"
        },
        {
          "id": 4,
          "image": "https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_550,c_scale,q_auto,f_auto/v1731049687/shreeInsul/PNG/xzfyol87mmfwph5ltsfq.png",
          "name": "Shreeinsul Building Rolls",
          "description": "Shreeinsul Resin Bonded Roll With facings like Aluminium Foil (FSK), Black Glass Tissue viel (BGT) and White Glass Tissue veil (WGT). Are used for roof & wall insulation for thermal & acoustic properties. Building Rolls are generally used under or over the purlins in PEB & Pre Engineered houses, cold storages, Poultry forms. These are also used for HVAC application. And conforming to IS:8183:1993, ASTM C 612, BS:3958 (Part - 4) & EN:14303:2013.",
          "link": "/products/building-rolls"
        },
        // {
        //   "id": 5,
        //   "image": "https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727948209/shreeinsul/products/Shreeinsul%20Lamella%20Batts/c7rcnjdyurwk2upmloqk.png",
        //   "name": "Shreeinsul Lamella Batts ",
        //   "description": "Shreeinsul Lamella Batts are used in sandwich panels, sandwich Doors for thermal insulation and pressure resistance. Lamella Batts are placed between two metal sheets for used in the partitions, Roof panels. These are also used in cold storage rooms. Lamella Batts conforming to IS:8183:1993, ASTM C 612, BS:3958 (Part - 4) & EN:14303:2013.",
        //   "link": "/products/lamella-batts"
        // },
        {
          "id": 6,
          "image": "https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_400,c_scale,q_auto,f_auto/v1731049685/shreeInsul/PNG/t2dl7xb26qgtlxnxckuo.png",
          "name": "Shreeinsul Loose Wool",
          "description": "Loose wool insulation, also known as loose-fill wool insulation, is an eco-friendly insulation material made from natural basalt rock. Provides excellent thermal resistance, sound absorption, fire-resistant and ideal for filling cavity and un-even surface",
          "link": "/products/loose-wool"
        }
      ]
    },
    {
      "categoryId": 2,
      "categoryName": "Shreeinsul Textile Products",
      "categoryProducts": [
        {
          "id": 1,
          "image": "https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_400,c_scale,q_auto,f_auto/v1731049681/shreeInsul/PNG/kowde6cnzmjr1vdkcplx.png",
          "name": "Shreeinsul Ceramic Fiber Rope",  
          "description": "Shreeinsul Ceramic Fiber Ropes are made from premium quality Ceramic fiber Yarn. The standard Rope segment consists of braided and twisted ropes and are available in both metallic and non-metallic categories. The braided ropes are available in round, square and rectangular shapes. SS wire or Fiber Glass reinforced to give the product excellent handling strength during application. These ropes contain 10 – 12% organic carrier which helps to establish physical formation of products and burns out at a temperature of about 400° C.",
          "link": "/products/CeramicFiberRope"
        },
        // {
        //   "id": 2,
        //   "image": "https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727949488/shreeinsul/products/Shreeinsul%20Ceramic%20twisted%20Rope/sz0w29ptnzctfddq0bsb.jpg",
        //   "name": "Shreeinsul Ceramic twisted Rope",
        //   "description": "ShreeCera Twisted ropes are made of Superior Quality Ceramic fiber yarn reinforced with fiber glass / ss wire / both SS wire & fiber glass yarn. ShreeCera ropes are light weight and high temperature resistance. These ropes are made of long ceramic fibers twisted together to improve the strength for pulling and connecting. These ropes contain some quantum of organic carrier which helps to establish physical formation of products which charred out at higher temperature.",
        //   "link": "/products/twisted-ropes"
        // },
        {
          "id": 3,
          "image": "https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_400,c_scale,q_auto,f_auto/v1731049674/shreeInsul/PNG/j5bcdpittcqczmlgezg1.png",
          "name": "Shreeinsul Yarn",
          "description": "Shreeinsul Ceramic fiber Yarn are made from high quality Alumino silicate fibers with reinforcement of SS wire / continuous fiberglass filament to increase  handling strength during installation and enhance fiber durability. The fiberglass reinforcement has temperature rating of 650°C. These yarns are contain 15%  organic carrier which helps to establish physical formation of products. Shreeinsul Ceramic fiber yarns are manufactured using advance technology and machinery of carding, spinning and doubling system.",
          "link": "/products/yarns"
        },
        {
          "id": 4,
          "image": "https://res.cloudinary.com/dcsentl2f/image/upload/v1731054456/shreeInsul/PNG/wmvhij4egrexpf2gvx48.png",
          "name": "Shreeinsul Cloth & tape",
          "description": "Shreeinsul Cloth/Tape are woven from Superior Quality ceramic fiber yarn and reinforced with Fiberglass/SS wire.  Cloth and Tapes have high temperature resistance. These cloths contain specific quantum of organic carrier which helps to establish physical formation of products which charred out at higher temperature. The continuous withstand temperature of the cloth & Tape is 1000° C.",
          "link": "/products/cloth-tape"
        }
      ]
    },
    {
      "categoryId": 3,
      "categoryName": "Shreeinsul PIR /PUF Products",
      "categoryProducts": [
        {
          "id": 1,
          "image": "https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_500,c_scale,q_auto,f_auto/v1731049679/shreeInsul/PNG/rjwjccdc1rjcaxxqfztq.png",
          "name": "Polyisocyanurate Foam (PIR)",
          "description": "Shreeinsul PIR CFC and HCFC free rigid insulation foam products having operating temperature range from -200°C to +150°C. Shreeinsul PIR foams are available in slab, pipe section and a choice of profiles & blocks. These are prefabricated using CNC machines from Free rise buns made in discontinous process. These foams are special purpose high strength insulating material adequate for low temperature installations as in LNG/LPG Pipelines & Equipments.",
          "link": "/products/pir"
        },
        {
          "id": 2,
          "image": "https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_400,c_scale,q_auto,f_auto/v1731049687/shreeInsul/PNG/stkpbuxaij5zohrj3glw.png",
          "name": "Polyurethane Foam (PUF)",
          "description": "Shreeinsul rigid polyurethane foams PUF have been successfully used for many years in the oil and gas industry for service temperatures of up to 110°C. This material is resistant to water ingress, provides much better insulation values than many other insulation materials and also offers structural support of the pipeline due to its high compressive strength. A polyurethane is polymer composed of a chain of organic units joined by carbamate (urethane) links. ",
          "link": "/products/puf"
        },
        {
          "id": 3,
          "image": "https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727950930/shreeinsul/products/High%20Density%20PUFPIR%20Supports/ompddtbhi4tacwxdvuup.jpg",
          "name": "High Density PUF/PIR Supports",
          "description": "Shreeinsul offers a wide range of PUF supports. The density of PUF support ranges from 80 kg/m3 to 500 kg/m3. The higher density PUF supports can be made available against specific customer requirements. Shree Foam high density supports enable higher loads without increase in surface area. Shree Foam supports do not require sawing and shaping at site, the supports designed to suit exact pipe OD. Shree Foam supports are having excellent closed cell structure and it does not permit water / water vapour penetration.",
          "link": "/products/puf-pir-support"
        }
      ]
    },
    {
      "categoryId": 4,
      "categoryName": "Moisture Barrier Lamination ",
      "categoryProducts": [
        {
          "id": 1,
          "image": "https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727951577/shreeinsul/products/PolySurlyn%20Lamination/glmvothaoz0fxc4f86ev.webp",
          "name": "PolySurlyn Lamination ",
          "description": "We Provide heat sealed 3-mil thick PolySurlyn Laminated Weather Protection Jacketing in accordance with EIL specifications and conforming to ASTM C1729. PolySurlyn Lamination acts as a brilliant moisture barrier and prevents corrosion on the inner surface of the cladding and onto the insulated surface.",
          "link": "/products/polySurlyn-lamination"
        },
        {
          id: 2,
          image: 'https://res.cloudinary.com/dwvxuesrd/image/upload/v1727949766/shreeinsul/products/Polykraft%20Lamination/egpbnylpm8ajiow5wztf.png',
          name: 'Polykraft Lamination',
          description: 'We also provide Polykraft moisture barrier consisting of one layer of 1 mil high density polyethylene film with a protective layer of 40-pound minimum virgin Kraft paper heat laminated on the weather protection cladding inside our factory. This product compiles with EIL specifications and provides excellent protection to the cladding material.',
          link: '/products/polykraft-lamination'
        },
        {
          "id": 3,
          "image": "https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727951679/shreeinsul/products/Profiled%20Weather%20Protection%20Jacketing/vq7kkuy84agfil2t7p8f.png",
          "name": "Profiled Weather Protection Jacketing",
          "description": "Our State-of-the-art facility can provide Corrugated Aluminium, SS & GI sheets with 32/5 & 76/19 profiles. Lengths of the corrugated material can be customised as per the customer's requirements. We are capable to do profiling on thicknesses varying from 0.4 mm to 1.22 mm depending upon the nature of the material. Profiled sheets are also available with moisture barrier protective laminations.",
          "link": "/products/profiled-weather-protection-jacketing"
        }
      ]
    }
    
  ]), []);

  return (
    <>
      <Phome />
      <div className="product">
        <div className="product-main-container">
          <div className="product-title">
           
            <div>
              {productList.map((category) => (
                <div key={category.categoryId}>
                  <h1 className="product-category-name">{category.categoryName}</h1>
                  <div className="product-cards">
                    {category.categoryProducts.map((product, index) => (
                      <>
                      <Link to={product.link} key={product.image} className="product-card-one">
                        <div className="product-card-one">
                          <div className="product-card-img">
                            <LazyLoad height={200} offset={100} once>
                              <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                              />
                            </LazyLoad>
                          </div>
                          <div className="product-card-text">
                            <h2>{product.name}</h2>
                            <p className="product-description">{product.description}</p>
                            <button className="card-btn">Click</button>
                            {/* <hr className='product-hr' /> */}
                          </div>
                        </div>
                      </Link>
                      </>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="products-page-countdown">
          {/* Suspense to lazy load the Slider */}
          <Suspense fallback={<div>Loading...</div>}>
            <Slider />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default React.memo(ProductPage)

import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../allpages/css/slider.css';
import Ahood from '../assets/A-hoodie.png';
import cat1 from '../assets/cat-1.jpg';
import cat2 from '../assets/kids.jpg';
import cat3 from '../assets/female.png';
import cat4 from '../assets/jeans.jpeg';


const Slider = () => { 
     const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
}
  
  return (
<>

<section className="testimonials my-5">
      <div className="container bg-light">
        <div className="row">
        <h1 className='text-center my-2'>Our Categories</h1>
          <div className="col-sm-12">
            <OwlCarousel id="customers-testimonials" className="owl-carousel" {...options}>
              {/* Testimonial 1 */}
              <div className="item">
                <div className="shadow-effect">
                  <img
                    className="img-circle"
                    src={Ahood}
                    alt=""
                  />
                </div>
                <div className="testimonial-name">Hoddies</div>
              </div>
              {/* End of Testimonial 1 */}

              {/* Testimonial 2 */}
              <div className="item">
                <div className="shadow-effect">
                  <img
                    className="img-circle"
                    src={cat1}
                    height={300}
                    h
                    alt=""
                  />
                </div>
                <div className="testimonial-name">Garments</div>
              </div>
              {/* End of Testimonial 2 */}

              {/* Testimonial 3 */}
              <div className="item">
                <div className="shadow-effect">
                  <img
                    className="img-circle"
                    src={cat2}
                    height={300}
                    alt=""
                  />
                </div>
                <div className="testimonial-name">Kids</div>
              </div>
              {/* End of Testimonial 3 */}

              {/* Testimonial 4 */}
              <div className="item">
                <div className="shadow-effect">
                  <img
                    className="img-circle"
                    src={cat3}
                    alt=""
                  />
                </div>
                <div className="testimonial-name">Dress</div>
              </div>
              {/* End of Testimonial 4 */}

              {/* Testimonial 5 */}
              <div className="item">
                <div className="shadow-effect">
                  <img
                    className="img-circle w-100"
                    src={cat4}
                    alt=""
                  />
                </div>
                <div className="testimonial-name">Jeans</div>
              </div>
              {/* End of Testimonial 5 */}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>

</>    
  )
}

export default Slider
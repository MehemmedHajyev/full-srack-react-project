import { useState } from "react"
import SliderItem from "./SliderItem"
import './slider.css'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1)





  const nextSlide = () => {
    setCurrentSlide((nextSlide) => (nextSlide + 1) % 3)
    // next Slide buttnon yapimi 

  }


  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3)
    // prev Slide buttnon yapimi 

  }
  return (
    <section className="slider">
      <div className="slider-elements">
        {currentSlide === 0 && <SliderItem imgSrc="img/slider/slider1.jpg" />
        }
        {currentSlide === 1 && <SliderItem imgSrc="img/slider/slider2.jpg" />
        }

        {currentSlide === 2 && <SliderItem imgSrc="img/slider/slider3.jpg" />
        }


        <div className="slider-buttons">
          <button onClick={prevSlide} >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button onClick={nextSlide}  >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="slider-dots">
          <button className={`slider-dot ${currentSlide === 0 ? 'active' : ''}  `}
            onClick={() => setCurrentSlide(0)}
          >
            <span></span>
          </button>
          <button className={`slider-dot ${currentSlide === 1 ? 'active' : ''}  `}
            onClick={() => setCurrentSlide(1)}

          >
            <span></span>
          </button> <button className={`slider-dot ${currentSlide === 2 ? 'active' : ''}  `}
            onClick={() => setCurrentSlide(2)}

          >
            <span></span>
          </button>
        </div>
      </div>
    </section>)
}

export default Slider
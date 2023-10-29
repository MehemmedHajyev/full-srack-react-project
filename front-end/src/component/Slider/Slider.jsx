import { useState } from "react"
import SliderItem from "./SliderItem"
import './slider.css'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

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
          <button >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="slider-dots">
          <button className={`slider-dot ${currentSlide === 0 ? 'active' : ''}  `} >
            <span></span>
          </button>
          <button className={`slider-dot ${currentSlide === 1 ? 'active' : ''}  `} >
            <span></span>
          </button> <button className={`slider-dot ${currentSlide === 2 ? 'active' : ''}  `} >
            <span></span>
          </button>
        </div>
      </div>
    </section>)
}

export default Slider
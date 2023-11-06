import { useState } from 'react'
import Slider from "react-slick";
import PropType from 'prop-types'
import productData from '../../../data.json';
import './Gallery.css'
const Gallery = () => {


    function NextArrow({ onClick }) {
        return (
            <button
                style={{
                    zIndex: '2'
                }}
                className="glide__arrow glide__arrow--right" onClick={onClick}>
                <i className="bi bi-chevron-right"></i>
            </button>
        )

    }

    NextArrow.propTypes = {
        onClick: PropType.func
    }


    function PreArrow({ onClick }) {
        return (
            <button
                style={{
                    zIndex: '2'
                }}
                className="glide__arrow glide__arrow--left" onClick={onClick}>
                <i className="bi bi-chevron-left"></i>
            </button>
        )

    }
    PreArrow.propTypes = {
        onClick: PropType.func
    }


    // const [product] = useState(productData);

    const sliderSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreArrow />,
        autoplaySpeed: 3000,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]

    }

    const [activeImage, setActiveImage] = useState({
        img: productData[0].img.singleImage,
        imgIndex: 0
    })
    console.log();
    return (
        <div className="product-gallery">
            <div className="single-image-wrapper">
                <img src={activeImage.img} id="single-image" alt="" />
            </div>
            <div className="product-thumb">
                <div className="glide__track" data-glide-el="track">
                    <ol className="gallery-thumbs glide__slides">
                        <Slider {...sliderSetting}>
                            {productData[0].img.thumbs.map((itemImg, index) => (
                                <li className="glide__slide glide__slide--active " key={index}
                                    onClick={() => setActiveImage({
                                        img: productData[0].img.thumbs[index],
                                        imgIndex: index,
                                    }

                                    )} >

                                    <img
                                        src={itemImg}
                                        className={`img-fluid ${activeImage.imgIndex === index ? 'active' : ''} `}
                                        alt="" />
                                </li>
                            ))}
                        </Slider>




                    </ol>
                </div>
                <div className="glide__arrows" data-glide-el="controls">


                </div>
            </div>



        </div >

    )
}

export default Gallery
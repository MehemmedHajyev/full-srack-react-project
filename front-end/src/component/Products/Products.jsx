import { useState } from 'react'
import ProductItem from './ProductItem'
import PropType from 'prop-types'
import Slider from "react-slick";
import productData from '../../data.json'
import './Products.css'

function NextArrow({ onClick }) {
    return (
        <button className="glide__arrow glide__arrow--right" onClick={onClick}>
            <i className="bi bi-chevron-right"></i>
        </button>
    )

}

NextArrow.propTypes = {
    onClick: PropType.func
}

function PreArrow({ onClick }) {
    return (
        <button className="glide__arrow glide__arrow--left" onClick={onClick}>
            <i className="bi bi-chevron-left"></i>
        </button>
    )

}
PreArrow.propTypes = {
    onClick: PropType.func
}


const Products = () => {
    const [product] = useState(productData);




    const sliderSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreArrow />,
        autoplaySpeed: 3000,
        autoplay: true,
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

    return (
        <>
            <section className="products">
                <div className="container">
                    <div className="section-title">
                        <h2>Featured Products</h2>
                        <p>Summer Collection New Morden Design</p>
                    </div>
                    <div className="product-wrapper product-carousel">

                        <Slider {...sliderSetting}>
                            {product.map((product) => (
                                <ProductItem productItem={product} key={product.id} />
                            ))}
                        </Slider>






                    </div>

                </div>
            </section>





        </>)
}

export default Products
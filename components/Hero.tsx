'use client'
import React from "react"
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToshow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };
    //Slides Data
    const slidesData = [
        {
            id: 0,
            img: "/canon5d.jpg",
            title: "Canon 5D Mark II",
            info: "Full-Frame DSLR Camera",
            price : "€1499"

        },
        {
            id: 1,
            img: "/marshallS.jpg",
            title: "Marshall Speaker",
            info: "Bluetooth Speaker",
            price : "€499"

        },
        {
            id: 2,
            img: "/mechKeyboard.jpg",
            title: "KeyBoard",
            info: "Mechanical KeyBoard",
            price : "€119"

        },
        {
            id: 3,
            img: "/ssd.jpg",
            title: "Samsung SSD ",
            info: "External SSD",
            price : "€129"

        },
        {
            id: 4,
            img: "/visionPro.jpg",
            title: "Apple Vision Pro",
            info: "Apple Products",
            price : "€4499"

        },
        {
            id: 5,
            img: "/watchW.jpg",
            title: "Braun",
            info: "Wrist Watch",
            price : "€199"

        },
    ]

  return (
    <>
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
                {slidesData.map((slide) => (
                    <Slide
                        key= {slide.id}
                        img= {slide.img}
                        title= {slide.title}
                        info= {slide.info}
                        price= {slide.price}
                    
                    />
                ))}
            </Slider>

        </div>
    </>
  )
}

export default Hero
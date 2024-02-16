import Image from 'next/image'
import { useState } from 'react'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: '/images/slide1.jpg',
    },
    {
      id: 2, 
      image: '/images/slide2.jpg'
    },
    {
      id: 3,
      image: '/images/slide3.jpg'
    }
  ]

  return (
    <div className="relative">

      <div 
        className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"
        onClick={() => setCurrentSlide(currentSlide => currentSlide - 1)}
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white">&#10094; </span>
      </div>

      <div 
        className="absolute top-0 right-0 w-full h-full bg-black/30 z-10"
        onClick={() => setCurrentSlide(currentSlide => currentSlide + 1)}  
      >
        <span className="absolute top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white">&#10095;</span>
      </div>

      <div className="w-full h-96 overflow-hidden">
        <Image 
          src={slides[currentSlide].image} 
          alt={slides[currentSlide].image}
          className="object-cover w-full h-full"
        />
      </div>

    </div>
  )
}

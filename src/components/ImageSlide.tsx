"use client"

import React, { useState } from 'react'
import { Slide, ImageData } from './GetImage'
import LightBox from 'yet-another-react-lightbox'
import { Tile } from './Tile'

const ImageSlide = ({ images, slideImages }: { images: ImageData[], slideImages: Slide[] }) => {
  console.log(slideImages[0])
  const [index, setIndex] = useState(-1)

  const handleClick = (index: number) => {
    setIndex(index)
  }

  return (
    <div>
      <div className='grid py-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
        {
          images.map((image, index) => (
            <Tile key={image.id} image={image} index={index} handleClick={handleClick}/>
          ))
        }
      </div>
      <LightBox index={index} open={index >= 0} close={() => setIndex(-1)} slides={slideImages} />
    </div>
  )
}

export default ImageSlide
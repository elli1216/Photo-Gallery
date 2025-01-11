import React from 'react'
import axios from 'axios'
import { unstable_cache } from 'next/cache'
import ImageSlide from './ImageSlide'

const slideImages = (images: ImageData[]):Slide[] => {
  const newImages:Slide[] = images.reduce((acc:Slide[], curr) => {
    acc.push({
      src: curr.largeImageURL,
      width: 3840,
      height: 5070
    })
    return acc
  }, [])
  return newImages
}

const getCachedSlides = unstable_cache(async (images) => slideImages(images), ['slide-image'])

const getImages = async (query:string) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const response = await axios.get(`https://pixabay.com/api/?key=${process.env.API_KEY_PIXABAY}&q=${query}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const GetImage = async ({query}:{query:string}) => {
  const data = await getImages(query)
  const images: ImageData[] = data.hits
  const cachedSlides = await getCachedSlides(images)
  
  return (
    <div>
      <ImageSlide images={images} slideImages={cachedSlides} />
    </div>
  )
}

export type ImageData = {
  id: number;
  tags: string;
  webformatURL: string;
  largeImageURL: string;
  type: string;
  likes: number;
  views: number;
}

export type Slide = {
  src: string;
  width: number;
  height: number;
}

export default GetImage
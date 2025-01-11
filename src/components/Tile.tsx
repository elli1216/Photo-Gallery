import React from 'react'
import { ImageData } from './GetImage'

export const Tile = ({ image, index, handleClick }: { image: ImageData, index: number , handleClick: (index: number) => void }) => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            onClick={() => handleClick(index)}
            className='object-cover object-center w-full h-48 hover:scale-125 transition-all duration-500 cursor-pointer'
            src={image.webformatURL}
            alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary">{image?.type}</div>
          </h2>
          <p>{image.tags}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Views: {image?.views}</div>
            <div className="badge badge-outline">Likes: {image?.likes}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
import React from "react";
import './ImageList.css'
import ImageCard from "./ImageCard";

const ImageSearch = (props) => {
  const images = props.image.map(num => {
    // 1.its no compulsory to place key in div only
    // 2.we can place key in <img/> tag too
    return <ImageCard key={num.id} image={num} />
  })

  return (
    <div className='image-List'>
      {images}
    </div >
  )
}


//




//

export default ImageSearch
// @ts-check

import { useState } from "react"

export const DogImage = (props) => {

  const { imageUrl } = props

  const [ dogUrl, setDogUrl ] = useState(imageUrl)

  const imageUpdate = async() => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const json = await res.json()
    if(json.status !== "success") return

    setDogUrl(json.message)
  }

  return (
    <div className='image-and-update-button-set'>
        <div className='image'>
          <img src={dogUrl} width={500} height={300}/>
        </div>
        <div className='image-update-button'>
          <button className='update-button' onClick={imageUpdate}>更新</button>
        </div> 
      </div>
  )
}

export default DogImage

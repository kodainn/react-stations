// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect"

export const DogListContainer = () => {

  const [ breeds, setBreeds ] = useState([])

  const [ selectedBreed, setSelectedBreed ] = useState('')

  const [ imageList, setImageList ] = useState([])

  const changeDog = (e) => {
    setSelectedBreed(e.target.value)
  }

  const showDogImageList = async() => {
    const res = await fetch('https://dog.ceo/api/breed/' + selectedBreed + '/images/random/12')
    const json = await res.json()
    setImageList(json.message)
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => {
      setBreeds(json.message)
    })
  
  }, [])

  return (
    <>
      <BreedsSelect 
        breeds={breeds}
        selectedBreed={selectedBreed}
        changeDog={changeDog}
        showDogImageList={showDogImageList}
      />
      <div className="container">
        <div className="row">
          {imageList.map((imageUrl, index) => (
            <img key={index} src={imageUrl} />
          ))}
        </div>
      </div>
    </>
  )
}

export default DogListContainer

// @ts-check

import { useState } from "react"

export const BreedsSelect = (props) => {
  
  const { breeds, selectedBreed, changeDog, showDogImageList } = props

  return (
    <>
      <div className="dog-select-box">
        <p>Breeds List</p>
        <select
          className="selct-box"
          onChange={changeDog}
          value={selectedBreed}>
          {Object.keys(breeds).map((breed) => {
            return (
              <option key={breed} value={breed}>
                {breed}
              </option>
            )
          })}
        </select>
        <button onClick={showDogImageList}>表示</button>
      </div>
    </>
  )
}

export default BreedsSelect

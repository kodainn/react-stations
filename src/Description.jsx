// @ts-check

import DogImage from "./DogImage";

export const Description = () => {

  const initialDogUrl = 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg';

  return (
    <div className='flexbox'>
      <div className='image-description'>
        <p>犬の画像を表示するサイトです。</p>
      </div>
      <DogImage imageUrl={initialDogUrl} />
    </div>
  )
}

export default Description

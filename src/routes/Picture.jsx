import { Link, useParams } from 'react-router-dom'
import Navigation from '../components/Navigation'
import pictures from '../constant'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function Picture() {
  let { id } = useParams()
  const pictureId = Number(id)
  const picture = pictures.find((p) => p.id === pictureId)
  return (
    <div className="flex flex-col justify-center">
      <div className="flex mt-3 md:mt-10 flex-col justify-center">
        <Link to={`/picture/${id}`} className="flex justify-center mb-5 ">
          <LazyLoadImage
            src={picture.image}
            alt=""
            className="md:h-60 w-auto drop-shadow-lg h-56"
            effect='blur'
          ></LazyLoadImage>
        </Link>
        <Navigation
          prevId={pictureId - 1}
          nextId={pictureId + 1}
          name={picture.name}
        />
      </div>
      <div className="flex flex-row ">
        <img
          src="/img/strel1.png"
          alt=""
          className="h-20 w-auto opacity-0 absolute md:relative"
        />
        <div className="m-4 mb-2 md:mb-5 md:m-0 p-3 md:mt-5 text-[#4056A1] brightness-75 border-[#4056A1] border-2 h-72 md:h-60 shadow-md border-opacity-10 rounded-md md:w-96 overflow-auto bg-[#C5CBE3] bg-opacity-20 will-change-scroll">
          {picture.description}
        </div>
      </div>
    </div>
  )
}

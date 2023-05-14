import { Link, useParams } from 'react-router-dom'
import pictures from '../constant'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function ApproximatePicture() {
  let { id } = useParams()
  const pictureId = Number(id)
  const picture = pictures.find((p) => p.id === pictureId)
  return (
    <div className="flex m-7 justify-center max-h-full flex-col">
      <Link to={`/list/${id}`}>
        <div className="flex justify-center font-semibold text-2xl font-sans text-[#F13C20] mb-5">
          {picture.name}
        </div>
      </Link>
      <div className="flex md:flex-row gap-5 flex-col">
        <div className="md:max-h-full md:w-1/2 flex justify-center">
          <LazyLoadImage
            src={picture.image}
            alt=""
            className="rounded-md shadow-md border-4 border-[#D79922] md:w-auto w-84 h-auto"
            id="height"
            effect="blur"
          ></LazyLoadImage>
        </div>
        <div className="md:w-1/2">
          <div
            className="text-[#4056A1] brightness-75 rounded-md overflow-auto will-change-scroll "
            id="height"
          >
            {picture.description}
          </div>
        </div>
      </div>
    </div>
  )
}

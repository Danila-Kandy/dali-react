import { Link } from 'react-router-dom'
import getMaxId from './GetMaxId'

export default function Navigation({ prevId, nextId, name }) {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex justify-center order-2 font-semibold text-xl font-sans md:p-6 border-2 shadow-md text-[#D79922]  rounded-md border-[#4056A1] border-opacity-20 md:w-96 w-72">
        {name}
      </div>
      <Link
        to={`/list/${prevId === 0 ? `${getMaxId()}` : prevId}`}
        className=" order-first"
      >
        <img
          src="/img/strel1.png"
          alt=""
          className="border-[#4056A1] border-2 shadow-md border-opacity-20 md:border-0 md:shadow-none rounded-md md:m-0 h-10 md:h-20 w-auto "
        />
      </Link>
      <Link to={'/list/1'} className="absolute" id="lookman">
        <img
          src="/img/look.png"
          alt=""
          className="h-40 w-auto opacity-0 2xl:opacity-100"
        />
      </Link>
      <Link
        to={`/list/${nextId === getMaxId() + 1 ? '1' : nextId}`}
        className="order-last"
      >
        <img
          src="/img/strel2.png"
          alt=""
          className="border-[#4056A1] border-2 shadow-md border-opacity-20 md:border-0 md:shadow-none rounded-md md:m-0 h-10 md:h-20 w-auto"
        />
      </Link>
    </div>
  )
}

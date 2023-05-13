import { Link } from 'react-router-dom'
import pictures from '../constant'

export default function Pictures() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-4 m-7 overflow-auto justify-items-center">
      {pictures.map((picture) => (
        <div key={picture.id}>
          <div>
            <Link to={`/list/${picture.id}`} className="hover:brightness-75 ">
              <div className="flex justify-center">
                <img
                  src={picture.image}
                  alt=""
                  className="h-60 max-w-full rounded-sm drop-shadow-lg border-4 border-[#D79922] "
                />
              </div>
              <div className="flex justify-center text-lg font-sans text-[#F13C20] brightness-75">
                {picture.name}
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

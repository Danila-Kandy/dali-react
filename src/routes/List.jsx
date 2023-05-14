import { Link } from 'react-router-dom'
import pictures from '../pictures'

export default function List() {
  return (
    <div className="md:grid md:grid-cols-3 gap-4 md:content-start m-7 overscroll-x-none overscroll-y-auto">
      {pictures.map((picture) => (
        <div
          key={picture.id}
          className="bg-[#F13C20] m-3 rounded-xl md:rounded-md border-[#efe2ba] hover:border-[#F13C20] border-2  transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110  duration-150 w-72"
        >
          <div className="font-semibold text-[#EFE2BA] p-2 flex justify-center text-xl">
            <Link to={`/list/${picture.id}`}>
              <p>{picture.name}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

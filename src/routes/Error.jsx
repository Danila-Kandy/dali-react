import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center my-56">
      <h1 className="text-5xl ">404</h1>
      <h1 className="text-5xl ">Page Not Found</h1>
      <p className="text-3xl ">
        Go
        <Link className="underline hover:text-[#4056A1] ml-1" to="/">
          Home
        </Link>
      </p>
    </div>
  )
}

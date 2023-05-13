import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <header className="flex basis-1/6 p-2 justify-center  bg-[#4056A1] sticky top-0 min-w-full z-50">
        <div className="flex md:flex-row gap-3 flex-col">
          <Link
            to="/list"
            className="text-3xl text-[#C5CBE3] font-sans hover:brightness-150 "
            id="title"
          >
            Art Gallery of Salvador Dali
          </Link>
          <Link to="/pictures" className="hover:brightness-150 flex justify-center">
            <img
              src="/img/logo4.png"
              alt=""
              className="mt-1 h-8 w-auto stroke-[#C5CBE3] fill-[#C5CBE3]"
            />
          </Link>
        </div>
      </header>
      <main className="flex  justify-center bg-[#EFE2BA]">
        <Outlet />
      </main>
      <footer className="flex basis-1/6 justify-center  bottom-0 p-2 bg-[#4056A1] sticky top-full">
        <div className="text-1xl font-medium text-[#C5CBE3] font-sans">
          Все права защищены © 2023
        </div>
      </footer>
    </div>
  )
}
//absolute inset-x-0

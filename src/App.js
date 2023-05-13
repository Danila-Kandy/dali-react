import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error'
import Layout from './routes/Layout'
import List from './routes/List'
import Picture from './routes/Picture'
import Pictures from './routes/Pictures'
import ApproximatePicture from './routes/ApproximatePicture'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/list',
        element: <List />,
      },
      {
        path: '/list/:id',
        element: <Picture />,
      },
      {
        path: '/pictures',
        element: <Pictures />,
      },
      {
        path: '/picture/:id',
        element: <ApproximatePicture />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
])

export default function App() {
  return (
      <RouterProvider router={router} />
  )
}


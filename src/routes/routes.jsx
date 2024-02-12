import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Summary } from "../pages/Summary";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div className="text-white">Pagina errada </div>
  },
  {
    path: '/summary',
    element: <Summary />,
    errorElement: <div className="text-white">Pagina errada </div>
  },
])
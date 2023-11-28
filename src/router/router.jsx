import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main";
import Index from "../components/form/Form"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Index />
      },
      
    ]
  },
])

export default router;
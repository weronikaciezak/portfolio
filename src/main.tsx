import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import MainPage from "./pages/MainPage.tsx";
import ColorPalette from "./values/ColorPalette.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/about",
    element: <div>About!</div>,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

const root = document.getElementById('root')!
root.style.backgroundColor=ColorPalette.background.hex
root.style.color=ColorPalette.text.hex
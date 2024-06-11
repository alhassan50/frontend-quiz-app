import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

//global styles
import GlobalStyles from "./components/styles/GlobalStyles.styles"

//pages
import Home from './pages/home'
import Quiz from './pages/quiz'

//layouts
import RootLayout from "./layouts/RootLayout"

//routes setup 
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path=":subject" element={<Quiz />}/>
  </Route>
))

function App() {

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}

export default App
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import { useDispatch } from "react-redux"

const Body = () => {
  
  const appRouter = createBrowserRouter([
   
    {
      path : "/",
      element : <Login/>
    },
    {
      path : "/Browse",
      element : <Browse/>
    },
])
 
  return (
    <div>
      
      <RouterProvider router={appRouter}/>
      {/* <Outlet/> */}
    </div>
  )
}

export default Body
import { BrowserRouter, Route, Routes} from "react-router-dom";
import {Login, Home, NoPage} from "./pages/index"

//https://dev.to/jemmycodes/creating-an-image-slider-with-the-usestate-hook-3c8i


const ProjectRoutes = () => {

  return (
	<BrowserRouter >
		<Routes >				
			<Route path="/" element={<Home/>} index /> 
			<Route path="*" element={<NoPage />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	</BrowserRouter>
  )
}



export default ProjectRoutes

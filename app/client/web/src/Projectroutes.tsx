import { BrowserRouter, Route, Routes} from "react-router-dom";


//https://dev.to/jemmycodes/creating-an-image-slider-with-the-usestate-hook-3c8i


const ProjectRoutes = () => {

  return (
	<BrowserRouter basename="/W3School_Templates_JS" 
	>
		<Routes >				
			<Route path="/" element={<Home/>} index /> 
			<Route path="*" element={<NoPage />} />
		</Routes>
	</BrowserRouter>
  )
}



export default ProjectRoutes

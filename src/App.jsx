import './App.css'
import {Routes,Route} from "react-router-dom";
import MainPage from "./Page/index.jsx";
function App() {
    return(
     <>
         <Routes>
             <Route path="/" element={<MainPage/>}/>
         </Routes>
     </>
  )
}

export default App

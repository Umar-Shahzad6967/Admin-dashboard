
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Admin from './component/Admin/Admin'
import Student from './component/Student/Student'
import Teacher from "./component/Teacher/Teacher.js"
import Main from "./component/Main/Main.js"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Teacher' element={<Teacher />} />
          <Route path='/Student' element={<Student />} />


        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App
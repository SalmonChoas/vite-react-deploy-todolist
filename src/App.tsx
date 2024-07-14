
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListWrapper from './components/ListWrapper'
import SideBar from './components/SideBar/SideBar'
import Home from './components/Home'
import Calendar from './components/Calendar'



function App() {


  return (
    <>
      <BrowserRouter>
      
      
        <div className="hidden top-[8px] top-[100px] top-[192px] priority-orange priority-yellow priority-purple priority-rose priority-blue priority-green priority-gray"></div>
        <div className="grid grid-cols-[auto_1fr]">
          <SideBar />

          <Routes >
            <Route path="/vite-react-deploy-todolist/" element={<Home />}/>
            <Route path="/vite-react-deploy-todolist/List" element={<ListWrapper />}/>
            <Route path='/vite-react-deploy-todolist/Calendar' element={<Calendar />}/>
          </Routes>
          {/* <ListWrapper /> */}
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

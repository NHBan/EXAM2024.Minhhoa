import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import TaskForm from './components/TaskForm'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import dataList from '../data.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [taskList,setTaskList]=useState(dataList)
  const[isModalOpen,setIsModalOpen]=useState(false)
  function handleAdd(newTask)
  {
    setTaskList([...taskList,newTask])
  }
  return (
    <>
     <Header onOpen={()=>setIsModalOpen(true)}/>
     <TaskList taskList={taskList}/>
     <TaskForm
     isOpen={isModalOpen}  onClose={()=>setIsModalOpen(false)} onAdd={handleAdd}
     />
    </>
  )
}

export default App

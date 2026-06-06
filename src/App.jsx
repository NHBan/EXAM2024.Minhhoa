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
  const [taskList, setTaskList] = useState(() => {
    const savedData = localStorage.getItem("myTasks")
    return savedData ? JSON.parse(savedData) : dataList
})
  const[isModalOpen,setIsModalOpen]=useState(false)
  function handleAdd(newTask)
  {
   const newList = [...taskList, newTask] 
    setTaskList(newList)
    localStorage.setItem("myTasks", JSON.stringify(newList))
  }
  function handleDelete(id)
  {
   const newList = taskList.filter(task => task.id !== id) 
    setTaskList(newList)
    localStorage.setItem("myTasks", JSON.stringify(newList))
  }
  return (
    <>
     <Header onOpen={()=>setIsModalOpen(true)}/>
     <TaskList taskList={taskList} onDelete={handleDelete}/>
     <TaskForm
     isOpen={isModalOpen}  onClose={()=>setIsModalOpen(false)} onAdd={handleAdd}
     />
    </>
  )
}

export default App

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
  return (
    <>
     <Header/>
     <TaskList taskList={dataList}/>
     <TaskForm/>
    </>
  )
}

export default App

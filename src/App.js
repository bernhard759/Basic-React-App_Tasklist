import React, { useState, useRef, useEffect } from 'react';
import Todolist from './Todolist';
import "./styles.css";
import logo from './logo192.png';

const LOCAL_STORAGE_KEY = "storage_key";

// function to generate a unique id
const uid = function(){
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function App() {

// hooks
const [tasks, setTodos] = useState([]) // state and function to update the state
const taskNameRef = useRef() // reference html elements

useEffect(() => { // call once
  const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTasks) { setTodos(storedTasks) }
}, [])

useEffect(() => { // store the data in local storage
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
}, [tasks]) // run when the array changes



function toggle(id) {
  const newList = [...tasks] // copy the state variable
  const taskm = newList.find(element => element.id === id)
  taskm.complete = !taskm.complete
  // set the task list via state function
  setTodos(newList)
}


function handleAddTask(e) {
  const name = taskNameRef.current.value
  if (name === "") {
    console.log("no name")
    return;
  }
  console.log(name);
  // useState function to update the data
  setTodos(prev => {
    return [...prev, {id: uid(), name: name, complete: false}]
  })
  console.log(tasks);
  taskNameRef.current.value = null // set value to null
}


function handleClearTasks() {
  const newList = tasks.filter(element => !element.complete) // get all non complete tasks
  setTodos(newList) // call the state function
}


  return (
    <>
      <center><img src={logo} alt="logo" style={{marginBottom:"2rem"}}/>
      <div>
      <input className="input" ref={taskNameRef} type="text" />
      <button className="button" onClick={handleAddTask} style={{marginLeft:"1rem", marginTop:"0.5rem"}}>Add todo</button>
      <button className="button" onClick={handleClearTasks} style={{marginLeft:"1rem", marginTop:"0.5rem"}}>Clear completed todos</button>
      
      </div>
      </center>
      <center>
      <div style={{marginTop:"0.5rem"}}>{tasks.filter(element => !element.complete).length} left to do</div>
      </center>
      
      <br/>
      <div style={{marginLeft:"40%"}}>
      <Todolist tasks={tasks} toggle={toggle}/>
      </div>
    </>

  )

}

export default App;

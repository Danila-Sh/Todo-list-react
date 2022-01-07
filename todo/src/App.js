import React from 'react';
import './App.css';
import Task from './components/Task';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      tasks: [
        {id: 0, texts: "задача 1", interest: 5, done: false},
        {id: 0, texts: "задача 2", interest: 5, done: true},
        {id: 0, texts: "задача 3", interest: 5, done: false}

      ]
    }
  }
    render() {
      const {tasks} = this.state;
      const TrueTasks = tasks.filter(task => !tasks.done)
      const FalseTasks = tasks.filter(task => tasks.done)

      return(
      <div className='App'>
        <h1 className= "top">Сегодня</h1>
        {[...TrueTasks].map(task => (
        <Task task = {task} key={task.id}></Task>
        ))}
 

      </div>
    )
  }
}

export default App;

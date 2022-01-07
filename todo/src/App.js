import React from 'react';
import './App.css';
import Task from './components/Task';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      tasks: [
        {id: 0, texts: "задача 1", interest: 5, done: false},
        {id: 0, texts: "задача 1", interest: 5, done: false},
        {id: 0, texts: "задача 1", interest: 5, done: false}

      ]
    }
  }
    render() {
      const {tasks} = this.state;
      return(
      <div className='App'>
        <h1 className= "top">Сегодня</h1>

/*        <ul className='uList'> 
        <li> Сегодня </li>
        <li> Все задачи </li>
        <li> Выполненные </li>
        <li> Списки </li>
        </ul>
*/        

      </div>
    )
  }
}

export default App;

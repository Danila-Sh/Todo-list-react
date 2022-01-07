import React from "react";

class Task extends React.Component {
    constructor(props) {
        super (props);

        this.state = props;
    }
    

    render()
    {

        class ActionBin extends React.Component {

            render()
            {
                return <div> {this.props.task.done ? <p>❌</p>: <p>✔️</p>} </div>
                
                
            }
        }
        const classNameTask = 'task ' + (this.state.task.done ? 'task-done' : '');

        return <div className={classNameTask}> 
            <p> {this.state.task.texts} </p> 
            <ActionBin task = {this.state.task}></ActionBin>
        
        </div>
    }
}

export default Task;

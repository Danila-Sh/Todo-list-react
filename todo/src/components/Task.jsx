import React from "react";


class Task extends React.Component {
    render() {
        return <div> <p> {this.props.task.texts} </p> </div>
    }
}

export default Task;

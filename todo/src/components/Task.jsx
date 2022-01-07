import React from "react";


class Task extends React.Component {
      render() {
        return (
            <div className="task">
                <p>{this.props.task}</p>
            </div>
        )
    }
}

export default Task;

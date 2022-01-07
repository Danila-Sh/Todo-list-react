import React from "react";

class ActionBin extends React.Component {

    render()
    {
        return <div> {this.props.task.done ? <p>✔️</p>: <p>❌</p>} </div>
        
    }
}

export default ActionBin;
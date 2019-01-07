import React from 'react';
import TaskV7 from "./TaskV7.js";


export default class TaskListV7 extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
                <div className="tasks">
                   {this.props.tasks.map((task) => { //index - нумерует с 0,каждый index будет новый уникальный для одного нлнмннта с масива
                       return <TaskV7 task={task} key={task.id}
                                      updeteCallback={this.props.onUpdete}
                                      deleteCallback={this.props.onDelete}
                                       />
                    })
               }
               </div>

        );
    }
}




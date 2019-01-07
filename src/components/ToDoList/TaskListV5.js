import React from 'react';
import TaskV5 from "./TaskV5.js";


export default class TaskListV5 extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
                <div className="tasks">
                   {this.props.tasks.map((task,index) => { //index - нумерует с 0,каждый index будет новый уникальный для одного нлнмннта с масива
                       return <TaskV5 task={task} key={task.id}
                                     updeteCallback={this.props.onUpdete}
                                     deleteCallback={this.props.onDelete}
                                       />
                    })
               }
               </div>

        );
    }
}




import React from 'react';
import TaskV6 from "./TaskV6.js";


export default class TaskListV6 extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
                <div className="tasks">
                   {this.props.tasks.map((task,index) => { //index - нумерует с 0,каждый index будет новый уникальный для одного нлнмннта с масива
                       return <TaskV6 task={task} key={task.id}
                                     updeteCallback={this.props.onUpdete}
                                     deleteCallback={this.props.onDelete}
                                       />
                    })
               }
               </div>

        );
    }
}




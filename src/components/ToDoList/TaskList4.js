import React from 'react';
import Task4 from "./Task4.js";


export default class TaskList4 extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
                <div className="tasks">
                   {this.props.tasks.map((task,index) => { //index - нумерует с 0,каждый index будет новый уникальный для одного нлнмннта с масива
                       return <Task4 task={task} key={task.id}
                                     updeteCallback={this.props.onUpdete}
                                     deleteCallback={this.props.onDelete}
                                       />
                    })
               }
               </div>

        );
    }
}




import React from 'react';
import TaskV8 from "./TaskV8.js";


export default class TaskListV8 extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
                <div className="tasks">
                   {this.props.tasks.map((task) => { //index - нумерует с 0,каждый index будет новый уникальный для одного нлнмннта с масива
                       return <TaskV8 task={task} store={this.props.store}
                                     />
                    })
               }
               </div>

        );
    }
}




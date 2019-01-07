import React from 'react';
import './ToDoList.css';

export default class ToDoList1 extends React.Component{
    constructor(props) {
        super();
        this.state = {
            tasks: [
                {
                    title: 'learn js',
                    isDone: false
                },
                {
                    title: 'learn react',
                    isDone: false
                }
            ]
        };
    }
    createNewTask = (e) => {
        if(e.key === 'Enter'){
            this.setState ({
                //tasks:[...this.state.tasks, e.currentTarget.value] добавление строки уже там обект
                tasks:[...this.state.tasks, {title:e.currentTarget.value, isDone: false}]
            })
            e.currentTarget.value = '';
            console.log('do validate');
        }
    }
    deleteTask (task)  {
        this.setState ({
            tasks:this.state.tasks.filter((t) =>{
                return t !== task;
        })
        });
    }
    toggleTaskStatus (task,e){
        task.isDone = !task.isDone;
        this.forceUpdate();
        }
    render(){
        return(
           <div className="todolist">
               <div className="header_todolist">
                    <input onKeyPress={this.createNewTask}/>
               </div>
               <div className="tasks">
                   {this.state.tasks.map((task) => {
                       return <div className={task.isDone ? 'task done' : 'task '}>
                           <input type="checkbox" onClick={this.toggleTaskStatus.bind(this,task)}/>
                           {task.title}
                           <span className="delete" onClick={this.deleteTask.bind(this,task)}>X</span>
                           </div>

                   })
               }

               </div>
            </div>
        );
    }
}




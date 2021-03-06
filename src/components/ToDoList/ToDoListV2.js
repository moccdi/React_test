import React from 'react';
import './ToDoList.css';
import Task from "./Task.js";
import ToDoListFooter from "./ToDoListFooterV4.js"
import {time} from "./ToDoListFooterV4";

export default class ToDoList1 extends React.Component{
    constructor() {
        time
        super();
        this.newIndex = 2;
        this.state = {
            tasks: [
                {
                    id:0,
                    title: 'learn js',
                    isDone: false,
                },
                {
                    id:1,
                    title: 'learn react',
                    isDone: false,
                }
            ]
        };
    }
    createNewTask (e){
        if(e.key === 'Enter'){
            this.setState ({
                //tasks:[...this.state.tasks, e.currentTarget.value] добавление строки уже там обект
                tasks:[...this.state.tasks,
                    {id:this.newIndex,
                    title:e.currentTarget.value,
                    isDone: false,
                    }]
            })
            e.currentTarget.value = '';

            this.newIndex++;
            }
    }
    deleteTask(task)  {
        // this.setState ({
        //     tasks:this.state.tasks.filter((t) =>{
        //         return t !== task;
        //     })
        // });

        //при рендори создатьеся каждій раз key и он может не правильно рендориться не по счету

        //при клике на <input type="checkbox" checked={this.state.task.isDone} onClick={this.toggleTaskStatus.bind(this)}/>
        //мы копируем из пропирти обьект и при нажатия создаем обект с сылки с проверти и меняем его свойтво
        //хоть сылка с пропирти на обект будет одинаковый с нашим обектом измененным в то же значение но он уже не будет сылаться на проперти
        //а пересоздался и обьеты одинаковые но value они уже не будут одним обьектом

        const newTaskList = this.state.tasks.filter((t) =>{
            return t.id !== task.id //сравнивание по айди с пропирти

        });

        this.setState ({
            tasks: newTaskList
        });

    }
    render(){
        return(
           <div className="todolist">
               <div className="header_todolist">
                    <input onKeyPress={this.createNewTask.bind(this)}/>
               </div>
               <div className="tasks">
                   {this.state.tasks.map((task,index) => { //index - нумерует с 0,каждый index будет новый уникальный для одного нлнмннта с масива
                       return <Task title={task.title} task={task} deleteCallback={this.deleteTask.bind(this)} key={task.id}/>

                   })
               }
               </div>
            </div>
        );
    }
}




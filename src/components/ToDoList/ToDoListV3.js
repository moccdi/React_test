import React from 'react';
import './ToDoList.css';
import Task from "./Task.js";
import ToDoListFooterV4 from "./ToDoListFooterV4.js"
import {time} from "./ToDoListFooterV4";
import ToDoListTaskCreatorV3 from "./ToDoListTaskCreatorV3.js"


export default class ToDoListV3 extends React.Component{
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
    createNewTask (task){
            this.setState ({
                    //tasks:[...this.state.tasks, e.currentTarget.value] добавление строки уже там обект
                    tasks:[...this.state.tasks,task]
                })
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
                <ToDoListTaskCreatorV3 hey="232323" onCreate={this.createNewTask.bind(this)}/>
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
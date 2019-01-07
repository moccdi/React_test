import  React from 'react';
import {combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import '../ToDoList.css';

import ToDoListFooterV8 from "./ToDoListFooterV8.js"
import TaskListV8 from "./TaskListV8.js";
import {getTask} from "./ServicesV8.js";

import {changeFilterAction, createNewTaskAction} from "../Redux/DotoList-Actions.js";
import {
    changeFilterCreator8,
    clearCopletedCreator8, deleteTaskCreator8,
    putTaskCreator8,
    putTasksActionCreator8, updateTaskCreator8
} from "./Redux8/DotoList-Actions";
import TodoListFormContainer8 from "./TodoListFormContainer8";
import {todolistReduceer8} from "./Redux8/Dotolist-reducers";




export default class ToDoListV8 extends React.Component{
    constructor() {
        super();
        this.store = createStore(todolistReduceer8);

        var state = this.store.getState(); //получить состояния

        this.state = state;


        this.store.subscribe( ()=> {
            var state = this.store.getState();
            this.setState(state);

        })

        getTask(53336)//.then(data => { применяеться .then к этому объекту но можно писать с новой строки аба так
            .then(taskFromServer => {

                var tasks = taskFromServer.map((itemFromServer) => {
                    return {
                        id: itemFromServer.id,
                        title: itemFromServer.title,
                        isDone: itemFromServer.done
                    };
                });

                var action = putTasksActionCreator8(tasks);
                this.store.dispatch(action);

                // state =  this.store.getState();
                // this.setState(state) сразу передает зачение без развертывание
                // this.setState({
                //     //tasks: state.tasks //filter: 'all' все крашил
                //     ...state //что бы передался все с filter:
                //     //state //передаст обект которого сколько то масивов неправльно
                // })



            });
    }
        //Получение Task без функции Services.js
        // fetch("https://repetitora.net/api/JS/Tasks?widgetId=53336&count=30", //ограничино число елементов &count=30 сколько елементов показывать
        //     {
        //         method: "GET",
        //         headers:{
        //             'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        //             //'content-type': 'application/json;'
        //             'accept':'application/json'
        //         },
        //         mode:'cors'
        //     })
        //     .then(result => result.json())
        //     .then(taskFromServer => {
        //     var task = taskFromServer.map((itemFromServer) => {
        //             return{
        //                 id:itemFromServer.id,
        //                 title:itemFromServer.title,
        //                 isDone:itemFromServer.done
        //             };
        //         });
        //         this.setState({
        //             tasks:task})
        //
        //
        //     });

    // clearCompleted(){
    //     // this.setState({
    //     //     tasks: this.state.tasks.filter(t => !t.isDone) //выбрать всех у кого isDone: true, и удалить
    //     // })
    //
    //     // var action = putTasksActionCreator(tasks);
    //     // this.store.dispatch(action);   //this.store.dispatch(clearCopleted());
    //
    //     this.store.dispatch(clearCopletedCreator8());
    //
    //
    // }
    // changeFilter(filterValue){
    //     //this.setState({filter: filterValue});
    //     this.store.dispatch(changeFilterCreator8(filterValue));
    // }
    putTaskToState(task){
            // this.setState ({
            //         //tasks:[...this.state.tasks, e.currentTarget.value] добавление строки уже там обект
            //         tasks:[...this.state.tasks,task]
            //     })
        this.store.dispatch(putTaskCreator8(task));
    }
    deleteTask(taskID)  {
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

        // const newTaskList2 = this.state.tasks.filter((t) =>{
        //     return t.id !== taskID //сравнивание по айди с пропирти
        // });
        // this.setState ({
        //     tasks: newTaskList2
        // });

        //this.store.dispatch(deleteTaskCreator8(taskID))

    }
    // updateTask(task){
    //     // const newTaskList = [...this.state.tasks];
    //     // this.setState({
    //     //     tasks: newTaskList
    //     // })
    //
    //     //task.isDone = !task.isDone
    //
    //
    //     // const newTaskList = [...this.state.tasks];
    //     // newTaskList.forEach((t)=> { //t это то что нам пришло с дочерниго класса
    //     //     if (t.id === task.id){
    //     //         t.isDone = task.isDone;
    //     //         return;
    //     //     }
    //     // });
    //     // this.setState({
    //     //     tasks: newTaskList
    //     // })
    //
    //
    //     //this.store.dispatch(updateTaskCreator8(task));
    //
    // }
    render(){
        var { tasks,filter   } = this.state;

        var filteredTask = [];
        if (filter === 'all') filteredTask = tasks;
        if (filter === 'active') filteredTask = tasks.filter( t => !t.isDone);
        if (filter === 'completed') filteredTask = tasks.filter( t => t.isDone);

        return(
            <div className="todolist">
                <TodoListFormContainer8 hey="232323" onCreate={this.putTaskToState.bind(this)}/>
                <TaskListV8 tasks={filteredTask} store={this.store}
                            />
                <ToDoListFooterV8 tasks={tasks}
                                  filter={filter}
                                  store={this.store}/>
            </div>
        );
    }
}
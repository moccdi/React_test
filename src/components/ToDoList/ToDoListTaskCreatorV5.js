import React from 'react';
import createTask from "./Services.js";

{/*<ToDoListTaskCreatorV3 hey="232323" onCreate={this.createNewTask.bind(this)}/>*/}
{/*var ob = ToDoListTaskCreatorV3({*/}
    {/*hey: "232323",*/}
    {/*onCreate: this.createNewTask.bind(this),*/}
{/*})*/}


export default class ToDoListTaskCreatorV5 extends React.Component{
    constructor(props) {
        super(props);
        this.newIndex = 2;

        //можно так або так вызывать
        //this.parentDeleteCalback =  props.onCreate;
        //this.props.onCreate
    }
    createNewTask (e){
            if(e.key === 'Enter'){

                    const newTaskInput = e.currentTarget;
                    createTask(newTaskInput.value,53336)//.then(data => { применяеться .then к этому объекту но можно писать с новой строки аба так
                        .then(data => {
                            var newTask = {
                                id:data.task.id,
                                title:data.task.title,
                                isDone:data.task.done
                            };
                        this.props.onCreate(newTask);
                        newTaskInput.value = '';
                        })
            }
    }
                    ////Создание Task без функции Services.js
                    //  const date = new URLSearchParams();
                    //  date.append('widgetId', 53336);
                    //  date.append('title', e.currentTarget.value);
                    //  const newTaskInput = e.currentTarget;
                    //  fetch("https://repetitora.net/api/JS/Tasks",
                    //      {
                    //          method: "POST",
                    //          body:date,
                    //          headers:{
                    //              'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    //              //'content-type': 'application/json;'
                    //              'accept':'application/json'
                    //          },
                    //          mode:'cors'
                    //      })
                    // .then(result => result.json())
                    // .then(date => {
                    //     var newTask ={
                    //     id:date.task.id,
                    //     title:date.task.title,
                    //     isDone: date.task.done,
                    // };
                    //     this.props.onCreate(newTask)
                    //
                    //     newTaskInput.value = ''; // удаляет после завершения
                    //     console.log(date);
                    // });
                    // //e.currentTarget.value = ''; сразу очищает после нажатия
                    //}
    render(){
        return(
            <div className="header_todolist">
                <input onKeyPress={this.createNewTask.bind(this)}/>
            </div>
        );
    }
}






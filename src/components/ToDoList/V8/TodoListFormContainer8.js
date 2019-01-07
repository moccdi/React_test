import React from 'react';
import createTask from "./ServicesV8.js";

{/*<ToDoListTaskCreatorV3 hey="232323" onCreate={this.createNewTask.bind(this)}/>*/}
{/*var ob = ToDoListTaskCreatorV3({*/}
    {/*hey: "232323",*/}
    {/*onCreate: this.createNewTask.bind(this),*/}
{/*})*/}

//export default class ToDoListTaskCreatorV6 extends React.Component{

export default class TodoListFormContainer8 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            isWaiting:false

        }
    }
    changetiTle(title){
        this.setState({
            title:title
        })
    }
    createTask2 (title) {
        this.setState({
            isWaiting:true,
            title:title
        })
        createTask(title, 53336)  //.then(data => { применяеться .then к этому объекту но можно писать с новой строки аба так
            .then(data => {
                var newTask = {
                    id: data.task.id,
                    title: data.task.title,
                    isDone: data.task.done
                };
                this.props.onCreate(newTask);
                //newTaskInput.value = '';
                this.setState({
                    isWaiting:false,
                    title:""
                });
            });
    }
    render(){
        var {title,isWaiting} = this.state;

        return (
            <ToDoListFormPresentation8 createTask3={this.createTask2.bind(this)} title={title} isWaiting={isWaiting}
                                       changetiTle={this.changetiTle.bind(this)}
                                       />
        );
    }
}


export const ToDoListFormPresentation8 = (props) => {

    const createNewTask  = (e) =>{
        if(e.key === 'Enter'){
            const newTaskInput = e.currentTarget;
            props.createTask3(newTaskInput.value);
            //newTaskInput.value = '';

        }
    }
        const changetiTle = (e) => {
        props.changetiTle(e.currentTarget.value);

    }
        return (
            <div className="header_todolist">
                <input onKeyPress={createNewTask} onChange={changetiTle} value={props.title} disabled={props.isWaiting}/>
            </div>
        );

}


// export default class ToDoListTaskCreatorV6 extends React.Component{
//     createNewTask (e){
//             if(e.key === 'Enter'){
//
//                     const newTaskInput = e.currentTarget;
//                     createTask(newTaskInput.value,53336)//.then(data => { применяеться .then к этому объекту но можно писать с новой строки аба так
//                         .then(data => {
//                             var newTask = {
//                                 id:data.task.id,
//                                 title:data.task.title,
//                                 isDone:data.task.done
//                             };
//                         this.props.onCreate(newTask);
//                         newTaskInput.value = '';
//                         })
//             }
//     }
//                     ////Создание Task без функции Services.js
//                     //  const date = new URLSearchParams();
//                     //  date.append('widgetId', 53336);
//                     //  date.append('title', e.currentTarget.value);
//                     //  const newTaskInput = e.currentTarget;
//                     //  fetch("https://repetitora.net/api/JS/Tasks",
//                     //      {
//                     //          method: "POST",
//                     //          body:date,
//                     //          headers:{
//                     //              'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
//                     //              //'content-type': 'application/json;'
//                     //              'accept':'application/json'
//                     //          },
//                     //          mode:'cors'
//                     //      })
//                     // .then(result => result.json())
//                     // .then(date => {
//                     //     var newTask ={
//                     //     id:date.task.id,
//                     //     title:date.task.title,
//                     //     isDone: date.task.done,
//                     // };
//                     //     this.props.onCreate(newTask)
//                     //
//                     //     newTaskInput.value = ''; // удаляет после завершения
//                     //     console.log(date);
//                     // });
//                     // //e.currentTarget.value = ''; сразу очищает после нажатия
//                     //}
//     render(){
//         return(
//             <div className="header_todolist">
//                 <input onKeyPress={this.createNewTask.bind(this)}/>
//             </div>
//         );
//     }
// }
//





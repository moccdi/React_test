import React from 'react';

{/*<ToDoListTaskCreatorV3 hey="232323" onCreate={this.createNewTask.bind(this)}/>*/}
{/*var ob = ToDoListTaskCreatorV3({*/}
    {/*hey: "232323",*/}
    {/*onCreate: this.createNewTask.bind(this),*/}
{/*})*/}


export default class ToDoListTaskCreatorV3 extends React.Component{
    constructor(props) {
        super();
        this.newIndex = 2;

        //можно так або так вызывать
        //this.parentDeleteCalback =  props.onCreate;
        //this.props.onCreate
    }
    createNewTask (e){
            if(e.key === 'Enter'){
                const newTask ={
                    id:this.newIndex,
                    title:e.currentTarget.value,
                    isDone: false,
                };
                this.props.onCreate(newTask)
                e.currentTarget.value = '';
                this.newIndex++;
                }
    }
    render(){
        return(
            <div className="header_todolist">
                <input onKeyPress={this.createNewTask.bind(this)}/>
            </div>
        );
    }
}






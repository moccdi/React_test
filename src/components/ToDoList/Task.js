import React from 'react';


export default class Task extends React.Component{
    constructor(props) {
        super();

        this.state = {
            task: props.task,
            //id:props.task.id, задаст точное значение id которое получит от props.task.id
            //title:props.title
        };
        this.parentDeleteCalback =  props.deleteCallback;
    }
    deleteTask2 ()  {
        this.parentDeleteCalback(this.state.task);
    }
    toggleTaskStatus (){
        var newTask = {
            ...this.state.task,
            isDone: !this.state.task.isDone
        }
        this.setState({
            task: newTask
        })
    }
    render(){
        return(
            <div className={this.state.task.isDone ? 'task done' : 'task '}>
                <input type="checkbox" checked={this.state.task.isDone} onClick={this.toggleTaskStatus.bind(this)}/>
                {this.state.task.title} {/*тоже самое значение  работает и без присвоения    this.state = { task: props.task,}
                тоже самое значение {this.props.task.title}   {this.props.title}*/}



                <span className="delete" onClick={this.deleteTask2.bind(this)}>X</span>
            </div>
        );
    }
}






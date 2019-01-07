import React from 'react';


export default class Task extends React.Component{
    constructor(props) {
        super(props);

        // this.state = {
        //     task: props.task,
        //     //id:props.task.id, задаст точное значение id которое получит от props.task.id
        //     //title:props.title
        // };
        this.parentUpdateCalback =  props.updeteCallback;
        this.parentDeleteCalback =  props.deleteCallback;
    }
    deleteTask2 ()  {
        this.parentDeleteCalback(this.props.task.id);
    }
    toggleTaskStatus (){

     //var task = this.props.task;
     //task.isDone = !this.isDone; по примеру раз поменяло на тру но isDone undefined хз как вообще поменяло
    //TaskList
    // const newTaskList = [...this.state.tasks];
    // this.setState({
    //     tasks: newTaskList
    // })


        //но мы изменяем props  лутше этого не делать (плохо будет отследить как сказали в примере,лучше что бы он изменялся где он был создан сам масив в верху в родителе )
        //var task = this.props.task;
        //task.isDone = !this.props.task.isDone; //сам сделал работает меняет в task.isDone его же значение на противоположное
        //task.isDone = !task.isDone; //тоже меняет
        //TaskList
        // const newTaskList = [...this.state.tasks];
        // this.setState({
        //     tasks: newTaskList
        // })

        //2способ который работает и изменяет props вышем в ToDoliste
        // var task = {
        //     ...this.props.task
        // }; мы взяли props
        // this.parentUpdateCalback(task) перекинули выше

        //TodoList
        //task.isDone = !task.isDone меняем проперти
        // const newTaskList = [...this.state.tasks];
        // newTaskList.forEach((t)=> { //t это то что нам пришло с дочерниго класса
        //     if (t.id === task.id){
        //         t.isDone = task.isDone;
        //         return;
        //     }
        // });
        // this.setState({
        //     tasks: newTaskList
        // })


        var task = {
            ...this.props.task
        };
        task.isDone = !task.isDone;; //!this.isDone; =  undefined всегда будет превращаться в true

        this.parentUpdateCalback(task)

    }
    render(){
        return(
            <div className={this.props.task.isDone ? 'task done' : 'task '}>
                <input type="checkbox" checked={this.props.task.isDone} onClick={this.toggleTaskStatus.bind(this)}/>
                {this.props.task.title} {/*тоже самое значение  работает и без присвоения    this.state = { task: props.task,}
                тоже самое значение {this.props.task.title}   {this.props.title}*/}



                <span className="delete" onClick={this.deleteTask2.bind(this)}>X</span>
            </div>
        );
    }
}






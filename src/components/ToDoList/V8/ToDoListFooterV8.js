import React from "react";
import {changeFilterCreator8, clearCopletedCreator8} from "./Redux8/DotoList-Actions";


export default class ToDoListFooterV8 extends React.Component{
    constructor(props) {
        super(props)
    }

    onclearCompleted(){
        this.props.store.dispatch(clearCopletedCreator8());
    }

    handleFiterChanged(e){
        this.props.store.dispatch(changeFilterCreator8(e.currentTarget.dataset.value));
    }
    render(){
        var {tasks,filter,onclearCompleted} = this.props;
        return(
            <div className="todolist-footer">
                <div>
                    <span>{ tasks.filter((t) => !t.isDone).length }</span>
                </div>
                <div className="buttons">
                    <button className={filter == 'all' ? 'selected' : ''}
                        data-value="all"
                        onClick={this.handleFiterChanged.bind(this)}>All</button>
                    <button className={filter == 'active' ? 'selected' : ''}
                        data-value="active"
                        onClick={this.handleFiterChanged.bind(this)}>Active</button>
                    <button className={filter == 'completed' ? 'selected' : ''}
                        data-value="completed"
                        onClick={this.handleFiterChanged.bind(this)}>Completed</button>
                </div>
                <div>
                    <button onClick={this.onclearCompleted.bind(this)}>Clear completed</button>
                </div>
            </div>
        )
    }

}
export const time = '21312';
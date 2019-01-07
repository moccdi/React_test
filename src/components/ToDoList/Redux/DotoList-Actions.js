export const c = {
    CHANGE_FILTER:"CHANGE_FILTER",
    CREATE_NEW_TASK:"CREATE_NEW_TASK",
    PUT_TASKS:"PUT_TASKS",
    PUT_TASK:"PUT_TASK",
    CLEAR_COMPLETED:"CLEAR_COMPLETED",
    PUT_NEW_TASK:"PUT_NEW_TASK",
    UPDATE_TAKS:"UPDATE_TAKS",
    DELETE_TASK:"DELETE_TASK"
}//что бы подсказывал и не ошиблись

export const changeFilterAction = {
    type: c.CHANGE_FILTER
};
export const createNewTaskAction = {
    type:c.CREATE_NEW_TASK,
    id:2,
    title: "learn react",
    isDone:true

};
export const putTaskCreator = (task) => {
    return {
        type: c.PUT_TASK,
        task: task
    }
}

export const deleteTaskCreator = (taskId) => {
    return {
        type: c.DELETE_TASK,
        taskId: taskId
    }
}
export const putTasksActionCreator = (tasks) => {
    return {
        type: c.PUT_TASKS,
        tasks: tasks
    }
}
export const clearCopletedCreator = () => {
    return {
        type: c.CLEAR_COMPLETED,


    }
}
export const changeFilterCreator = (newFilterValue) => {
    return {
        type: c.CHANGE_FILTER,
        value:newFilterValue

    }
}


export const updateTaskCreator = ({id,isDone,title}) => { //заберето только task.id,task.isDone,task.title
    return {
        type: c.UPDATE_TAKS,
        id:id,
        isDone:isDone,
        title:title
    }
}



import {c} from "./DotoList-Actions";


export function todolistReduceer(oldState = {
    tasks: [],
    filter: 'all' //сначала тут ничего не было но потом поставили Reduc и нужно что бы было значение это если oldState не передадут ничего
    }, action){
    switch (action.type) {
        case c.CHANGE_FILTER:
            return {
                ...oldState,
                filter: action.value
            };
        case c.PUT_NEW_TASK:
            return {
                ...oldState, //мы скопировали новый обьект
                tasks: [...oldState.tasks,{ //скопировали с того же обьекта tasks// сначла все скопировали и tasks:[ {…///arr(0)} ] filter: , потом еще раз tasks:мы копируем первую и заменяем её значение свойств
                    id: action.id,
                    title: action.id,
                    isDone: action.isDone
                }]
            };
        case c.PUT_TASKS:
            return {
                ...oldState, //мы скопировали новый обьект
                tasks: [...oldState.tasks,...action.tasks //скопировали с того же обьекта tasks// сначла все скопировали и tasks:[ {…///arr(0)} ] filter: , потом еще раз tasks:мы копируем первую и заменяем её значение свойств
                ]
            };
        case c.PUT_TASK:
            return {
                ...oldState, //мы скопировали новый обьект
                tasks: [...oldState.tasks, action.task //скопировали с того же обьекта tasks// сначла все скопировали и tasks:[ {…///arr(0)} ] filter: , потом еще раз tasks:мы копируем первую и заменяем её значение свойств
                ]
            };
        case c.DELETE_TASK:
                let newState = {...oldState};
                newState.tasks = newState.tasks.filter(t => {
                    return t.id !== action.taskId;
                })
                return newState;
        case c.CLEAR_COMPLETED:
                // let newState = {...oldState};
                // newState.tasks = newState.tasks.filter(t => !t.isDone)
                // return newState тоже самое
                return{
                    ...oldState,
                    tasks: oldState.tasks.filter(t => !t.isDone)
            }
        case c.UPDATE_TAKS:
                var newState = {...oldState};
                newState.tasks = [...newState.tasks]; //нахрен не надо нахрено хз и так же
                newState.tasks.forEach( (task,index) => {
                    if (task.id == action.id) {
                        newState.tasks[index] ={
                            ...task,
                        isDone: action.isDone,
                        title:action.title
                        }
                    }

                });
                return newState;
            debugger;
        default:
            if (!!oldState)
                return oldState;
            return{
                tasks: [],
                filter: 'all'
            }

    }
}
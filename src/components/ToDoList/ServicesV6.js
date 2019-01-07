import React from "react";

const headers = {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'accept':'application/json'
};
const apiUrl = 'https://repetitora.net/api/JS/Tasks';

function requstDate(url, type, body) {
    return fetch(url,
        {
            method: type,
            body:body,
            headers:headers,
            mode:'cors'
        })
        .then(result => result.json())
}


export default function createTask (title,widgetId) {
    const date = new URLSearchParams();
    date.append('widgetId', widgetId);
    date.append('title', title);


    return requstDate(apiUrl, 'POST', date)
}

export function updateTask (widgetId ,taskId ,title = null,isDone = null) {
    const date = new URLSearchParams();
    date.append('taskId', taskId);
    date.append('widgetId', widgetId);
    if(isDone != null){
        date.append('isdone', isDone);
    }
    else if (title != null){
        date.append('title',title);
    }

    return requstDate(apiUrl, 'PUT', date);
}

// export default function createTask (title,widgetId){
//     const date = new URLSearchParams();
//     date.append('widgetId', widgetId);
//     date.append('title', title);
//     return fetch(apiUR,
// {
//     method: 'POST',
//     body:date,
//     headers:headers,
//     mode:'cors'
// })
//     .then(result => result.json())
// }
export function getTask(widgetId) {
   return requstDate(`${apiUrl}?widgetId=${widgetId}&count=30`, 'GET', null)


    // fetch(`${apiUR}?widgetId=${widgetId}&count=30`, //строка интерполяция `` ${} как в php
    //     {
    //         method: 'GET',
    //         headers:headers,
    //         mode:'cors'
    //     })
    //     .then(result => result.json())

}
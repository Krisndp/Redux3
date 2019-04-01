
export function addNew(taskName){
    return {
        type: 'ADD_NEW_TASK',
        taskName
    }
}

export function toggleTask(taskId){
    return {
        type: 'TOGGLE_ONE_TASK',
        taskId
    }
}
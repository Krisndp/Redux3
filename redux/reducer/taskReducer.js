
const task = [{taskName: 'abc', taskId: 1, completed: false}];

const taskReducer = (state = task, action) => {
    switch (action.type) {
        case 'ADD_NEW_TASK':
            return [
                ...state,
                {
                    taskId: state.length + 1,
                    taskName: action.taskName,
                    completed: false,
                }];
        case 'TOGGLE_ONE_TASK':
            return state.map(e => {
                if (e.taskId == action.taskId) {
                    return { ...e, completed: !e.completed, }
                } else { return e }
            })
        default:
            return state
    }
}

export default taskReducer;
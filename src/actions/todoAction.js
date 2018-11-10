export const TODO_REQUEST = 'todo:request';
export const TODO_REQUEST_SUCCESS = 'todo:request:success';
export const TODO_REQUEST_FAILED = 'todo:request:failed';
export const TODO_SELECTED_TASK = "todo:selected:task";

export const requestTodos = () => ({
    type: TODO_REQUEST,
    payload: {isLoading: true}
});

export const requestTodosSuccess = (todos) => ({
    type: TODO_REQUEST_SUCCESS,
    payload: {todos, isLoading: false}
});

export const requestTodosFailed = () => ({
    type: TODO_REQUEST_FAILED,
    payload: {isLoading: false}
});

export const selectTask = (id) => ({
    type: TODO_SELECTED_TASK,
    payload: id
});
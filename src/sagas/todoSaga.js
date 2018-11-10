import { call, put, takeLatest } from 'redux-saga/effects'
import request from '../utils/request';
import { TODO_REQUEST, requestTodosSuccess, requestTodosFailed } from '../actions/todoAction';

function* fetchTodosAsync() {
    try {
       const todos = yield call(request, 'https://jsonplaceholder.typicode.com/todos/');
       yield put(requestTodosSuccess(todos));
    } catch (e) {
       yield put(requestTodosFailed());
    }
 }
 
function* todoSaga() {
    yield takeLatest(TODO_REQUEST, fetchTodosAsync);
}

export default todoSaga;

import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { requestTodos, selectTask } from './actions/todoAction';
import { completedTasks, incompletedTasks, selectedTasks} from './selectors/todoSelectors';


class App extends Component {
  constructor(props){
    super(props);

    this.selectTask = this.selectTask.bind(this);
  }

  componentDidMount(){
    this.props.toFetchTodos();
  }

  selectTask(id){
    this.props.selectTask(id);
  }

  render() {
    const { isLoading, incompletedTasks, completedTasks, selectedTasks } = this.props;
    return (
      <div>
        {isLoading ? (
          <div> LOADING ... </div>
        ) : (
          <div>
            <div className="todos-list">
              <h1>Done {completedTasks.length}</h1>
              {completedTasks.map((task, i) => {
                return(
                  <div key={i}>
                    <input type="checkbox" id={`task-${task.id}`} value={task.id} checked={task.completed} readOnly={true} />
                    <label htmlFor={`task-${task.id}`}>{task.title}</label>
                  </div>
                )
              })}
            </div>
            <div className="todos-list">
              <h1>Open {incompletedTasks.length}</h1>
              {incompletedTasks.map((task, i) => {
                return(
                  <div key={i}>
                    <input type="checkbox" id={`task-${task.id}`} value={task.id} checked={task.completed} onChange={() => this.selectTask(task.id)} />
                    <label htmlFor={`task-${task.id}`}>{task.title}</label>
                  </div>
                )
              })}
            </div>
            <div className="todos-list">
              <h1>Selected {selectedTasks.length}</h1>
              {selectedTasks.map((task, i) => {
                return(
                  <div key={i}>
                    <input type="checkbox" id={`task-${task.id}`} value={task.id} checked={true} readOnly={true} />
                    <label htmlFor={`task-${task.id}`}>{task.title}</label>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  selectedTaskIds: state.selectedTaskIds,
  isLoading: state.isLoading,
  completedTasks: completedTasks(state),
  incompletedTasks: incompletedTasks(state),
  selectedTasks: selectedTasks(state)
})


const mapActionsToProps = {
  toFetchTodos: requestTodos,
  selectTask: selectTask
}

export default connect(mapStateToProps, mapActionsToProps)(App);

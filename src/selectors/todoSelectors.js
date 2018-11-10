import { createSelector } from 'reselect'

const tasks = state => state.todos;
const selectedTaskIds = state => state.selectedTaskIds;

export const completedTasks = createSelector(
    tasks,
    tasks => tasks.filter(task => task.completed)
);

const getNotSelectedTasks = (tasks, selectedTaskIds) =>{
    let notSelectedTasks = tasks.filter(task => selectedTaskIds.indexOf(task.id) === -1 && !task.completed);
    
    return notSelectedTasks;
}

export const incompletedTasks = createSelector(
    tasks,
    selectedTaskIds,
    getNotSelectedTasks
);

const getSelectedTasks = (tasks, selectedTaskIds) =>{
    let selectedTasks = tasks.filter(task => selectedTaskIds.indexOf(task.id) > -1);
    
    return selectedTasks;
}
export const selectedTasks = createSelector(
    tasks,
    selectedTaskIds,
    getSelectedTasks
);
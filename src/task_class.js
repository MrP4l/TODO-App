import { projectsList } from './user_dynamic_interface';
import format from 'date-fns/format';

export class Task {
    static id = parseInt(localStorage.getItem('task_id') || '0');
    constructor(taskName, projectId) {
        this.taskName = taskName;
        this.projectId = projectId;
        this.id = ++Task.id;
        const date = new Date();
        this.date = format(date, 'dd/MM/yyyy');
        localStorage.setItem('task_id', Task.id.toString());
    }

    get taskId() {
        return this.id
    }

    deleteTask(taskData) {
        const projectId = taskData.projectId;
        const projectIndex = projectsList.findIndex(project => project.id === projectId);
        const taskIndex = projectsList[projectIndex].tasks.findIndex(task => parseInt(task.id) === parseInt(taskData.id));
        if (projectIndex !== -1 && taskIndex !== -1) {
            projectsList[projectIndex].tasks.splice(taskIndex, 1);
		}
    }
}


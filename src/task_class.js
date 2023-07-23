import { projectsList } from './user_dynamic_interface';
import format from 'date-fns/format';

export class Task {
    static id = 0;
    constructor(taskName, projectId) {
        this.taskName = taskName;
        this.projectId = projectId;
        this.id = ++Task.id;
        const date = new Date();
        this.date = format(date, 'dd/MM/yyyy');;
    }

    get taskId() {
        return this.id
    }

    deleteTask(taskData) {
        const projectIndex = taskData.projectId;
        const taskIndex = projectsList[projectIndex].tasks.findIndex(task => parseInt(task.id) === parseInt(taskData.id));
        projectsList[projectIndex].tasks.splice(taskIndex, 1);
        console.log("post:", projectsList);
    }
}

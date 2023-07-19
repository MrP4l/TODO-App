import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import { projectsList } from './user_dynamic_interface';

export class Task {
    static id = 0;
    constructor(taskName, projectId) {
      this.taskName = taskName;
      this.projectId = projectId;
      this.id = ++Task.id;
    }
  
    get taskId() {
      return this.id
    }
  
    deleteTask(taskData) {
        const projectIndex = taskData.projectId;
        const taskIndex = projectsList[projectIndex].tasks.findIndex(task => parseInt(task.id) === parseInt(taskData.id));
        projectsList[projectIndex].tasks.splice(taskIndex, 1);
        console.log("post:",projectsList);
    }
  }
  
  
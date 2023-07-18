import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import { projectsList } from './user_dynamic_interface';

export class Task {
    static id = 0;
    constructor(taskName) {
      this.taskName = taskName;
      this.id = ++Task.id;
    }
  
    get taskId() {
      return this.id
    }
  
    deleteTask(task) {
      const taskId = task.id;
      const taskToRemove = projectsList.tasks.find(task => task.id === taskId);
      console.log("pre:",projectsList)
      if (taskToRemove) {
        const index = projectsList.tasks.indexOf(taskToRemove)
        projectsList.tasks.splice(index, 1);
        console.log("post:",projectsList)
      }
    }
  }
  
  
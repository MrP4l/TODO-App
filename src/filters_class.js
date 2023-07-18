import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import { projectsList } from './user_dynamic_interface';

export class Filter {
    allFilter() {
      const removeTasks = document.querySelectorAll(".newTaskContainer");
      removeTasks.forEach(taskContainer => {
        taskContainer.remove();
      });
  
      this.projectsList.forEach(project => {
        project.tasks.forEach(task => {
          const taskInstance = new Task(task.taskName, task.projectId, task.taskId);
          taskInstance.createTask();
        });
      });
  
      const newProjectName = document.getElementById("mainSquareTitleTextChild")
      newProjectName.textContent = "All";
    }
  
    todayFilter() {
      const date = new Date();
      const currentDate = format(date, 'dd/MM/yyyy');
  
      const removeTasks = document.querySelectorAll(".newTaskContainer");
      removeTasks.forEach(taskContainer => {
        taskContainer.remove();
      });
  
      projectsList.forEach(project => {
        project.tasks.filter(task => task.date === currentDate)
          .forEach(filteredTask => {
            const taskInstance = new Task(filteredTask.taskName, filteredTask.projectId, filteredTask.taskId);
            taskInstance.createTask();
          });
      });
  
      const newProjectName = document.getElementById("mainSquareTitleTextChild")
      newProjectName.textContent = "Today";
    }
  
    weekFilter() {
      const date = new Date();
      const startOfTheWeek = startOfWeek(date, { weekStartsOn: 1 });
      const endOfTheWeek = endOfWeek(date, { weekStartsOn: 1 });
      const startOfTheWeekFormatted = format(startOfTheWeek, 'dd/MM/yyyy');
      const endOfTheWeekFormatted = format(endOfTheWeek, 'dd/MM/yyyy');
  
      const removeTasks = document.querySelectorAll(".newTaskContainer");
      removeTasks.forEach(taskContainer => {
        taskContainer.remove();
      });
  
      projectsList.forEach(project => {
        project.tasks.filter(task => task.date >= startOfTheWeekFormatted && task.date <= endOfTheWeekFormatted)
          .forEach(filteredTask => {
            const taskInstance = new Task(filteredTask.taskName, filteredTask.projectId, filteredTask.taskId);
            taskInstance.createTask();
          });
      });
      const newProjectName = document.getElementById("mainSquareTitleTextChild")
      newProjectName.textContent = "Week";
  
    }
  }
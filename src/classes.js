import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import { projectsList } from './userDynamicInterface';
export class Project {
    static id = 0;
    constructor(projectName) {
        this.projectName = projectName;
        this.tasks = [];
        this.id = ++Project.id;
    }

    get projectId() {
        return this.id 
    }

    createProject() {
        const mainSquareTitleIconChild = document.getElementById("mainSquareTitleIconChild");
        const newProjectContainer = document.createElement("div");
        const newProjectName = document.createElement("div");
        const newProjectDeleteButton = document.createElement("div");

        newProjectName.textContent = this.projectName;
        newProjectDeleteButton.classList.add("fa-solid");
        newProjectDeleteButton.classList.add("fa-trash");

        newProjectContainer.id = "newProjectContainer";
        newProjectName.classList.add("newProjectName");
        newProjectDeleteButton.classList.add("newProjectDeleteButton");
        mainSquareTitleIconChild.classList.add("fa-solid");
        mainSquareTitleIconChild.classList.add("fa-plus");


        sideColumnSecondChild.appendChild(newProjectContainer);
        newProjectContainer.appendChild(newProjectName);
        newProjectContainer.appendChild(newProjectDeleteButton);

        newProjectDeleteButton.addEventListener("click", () => {
            this.deleteProject(newProjectContainer);
          });
      
        return newProjectContainer;
    }

    showProject() {
        const removeTasks = document.querySelectorAll("#newTaskContainer");
        removeTasks.forEach((newTaskContainer) => {
            newTaskContainer.remove();
        }) 

        const mainSquareTitleTextChild = document.getElementById("mainSquareTitleTextChild");
        const index = projectsList.findIndex((project) => project.id === this.id);
        if (index !== -1) {
          for (const [key, value] of Object.entries(projectsList[index])) {
            mainSquareTitleTextChild.innerText = projectsList[index].projectName;
            if (projectsList.length === 0) {
              mainSquareTitleTextChild.innerText = " ";
            }
            if (key === "tasks") {
                    for (const task of value) {
                      const taskInstance = new Task(task.taskName, task.projectId, this.projectsList, task.taskId);
                      taskInstance.createTask();
                    }
                }
            }
          }
    }

    deleteProject(newProjectContainer) {
        const index = projectsList.findIndex((project) => project.id === this.id);
        if (index !== -1) {
            projectsList.splice(index, 1);
        }
        newProjectContainer.remove();
        const mainSquareTitleTextChild = document.getElementById("mainSquareTitleTextChild");
        if (projectsList.length === 0) {
          mainSquareTitleTextChild.innerText = " ";
        } 
      }
}

export class Task {
    constructor(taskName, projectId, taskId) {
        this.taskName = taskName;
        this.projectId = projectId;
        this.taskId = taskId;
    }

    createTask() {
        const mainSquareTasksChild = document.getElementById("mainSquareTasksChild");
        const newTaskContainer = document.createElement("div");
        const newTaskIcon = document.createElement("div");
        const newTaskName = document.createElement("div");
        const newTaskDate = document.createElement("div");

        newTaskContainer.id = "newTaskContainer";
        newTaskIcon.id = "newTaskIcon";
        newTaskName.id = "newTaskName";
        newTaskDate.id = "newTaskDate";

        newTaskName.textContent = this.taskName;
        newTaskIcon.classList.add("fa-solid");
        newTaskIcon.classList.add("fa-check-double");

        const date = new Date();
        const currentDate = format(date, 'dd/MM/yyyy');
        
        this.date = currentDate;

        newTaskDate.innerHTML = this.date;
        
        mainSquareTasksChild.appendChild(newTaskContainer);
        newTaskContainer.appendChild(newTaskIcon);
        newTaskContainer.appendChild(newTaskName);
        newTaskContainer.appendChild(newTaskDate);

        newTaskContainer.addEventListener("click", () => {
            this.deleteTask(newTaskContainer);
        });
      
        return newTaskContainer;
    }

    deleteTask(newTaskContainer) {
        const project = projectsList.find(project => project.id === this.projectId);
        if (project) {
            const taskIndex = project.tasks.findIndex(task => task.taskId === this.taskId);
          if (taskIndex !== -1) {
            project.tasks.splice(taskIndex, 1);
          }
        }
        newTaskContainer.remove();
    }
}

export class Filter {
    constructor(projectsList) {
        this.projectsList = projectsList;
    }

    allFilter() {
        const removeTasks = document.querySelectorAll("#newTaskContainer");
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

        const removeTasks = document.querySelectorAll("#newTaskContainer");
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
        const startOfTheWeek = startOfWeek(date, {weekStartsOn: 1});
        const endOfTheWeek = endOfWeek(date, {weekStartsOn: 1});
        const startOfTheWeekFormatted = format(startOfTheWeek, 'dd/MM/yyyy');
        const endOfTheWeekFormatted = format(endOfTheWeek, 'dd/MM/yyyy');
        
        const removeTasks = document.querySelectorAll("#newTaskContainer");
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

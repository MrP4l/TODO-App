import createMainSquare from "./userStaticInterface"; 
export class Project {
    static id = 0;
    constructor(projectName, projectsList) {
        this.projectName = projectName;
        this.projectsList = projectsList;
        this.tasks = [];
        this.id = ++Project.id;
    }

    get projectId() {
        return this.id 
    }

    // TODO
    // Dynamic window usable for All, today, week and compatible with DOM
    createProject() {
        const mainSquare = document.getElementById("mainSquare");
        const newProjectContainer = document.createElement("div");
        const newProjectName = document.createElement("div");
        const newProjectDeleteButton = document.createElement("div");

        newProjectName.textContent = this.projectName;
        newProjectDeleteButton.classList.add("fa-solid");
        newProjectDeleteButton.classList.add("fa-trash");

        newProjectContainer.id = "newProjectContainer";
        newProjectName.classList.add("newProjectName");
        newProjectDeleteButton.classList.add("newProjectDeleteButton");

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
        mainSquareTitleTextChild.innerText = this.projectName;
        const index = this.projectsList.findIndex((project) => project.id === this.id);
        if (index !== -1) {
            for (const [key, value] of Object.entries(this.projectsList[index])) {
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
        const index = this.projectsList.findIndex((project) => project.id === this.id);
        if (index !== -1) {
          this.projectsList.splice(index, 1);
        }
        newProjectContainer.remove();
        // Add at the end the deletion (and the creation) of the project's content (mainSquareChildrenContainer)
        //mainSquareChildrenContainer.remove();
      }
}

export class Task {
    constructor(taskName, projectId, projectsList, taskId) {
        this.taskName = taskName;
        this.projectId = projectId;
        this.projectsList = projectsList;
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

        const [day, month, year] = [
            new Date().getDate(),
            new Date().getMonth() + 1,
            new Date().getFullYear()
        ];
        const date = `${day}/${month}/${year}`;
        
        this.date = date;

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
        const project = this.projectsList.find(project => project.id === this.projectId);
        if (project) {
            const taskIndex = project.tasks.findIndex(task => task.taskId === this.taskId);
            console.log("taskIndex:", taskIndex)
          if (taskIndex !== -1) {
            project.tasks.splice(taskIndex, 1);
          }
        }
        console.log("project:", project, "project list after splice:", this.projectsList)
        newTaskContainer.remove();
    }

    showTasks() {
    }
}

export class Filter {
    constructor(projectsList) {
        this.projectsList = projectsList;
    }

    allFilter() {
    }

    todayFilter() {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}/${month}/${year}`;

        const removeTasks = document.querySelectorAll("#newTaskContainer");
        removeTasks.forEach(taskContainer => {
          taskContainer.remove();
        });

        for (const project of this.projectsList) {
          for (const task of project.tasks) {
            if (task.date === currentDate) {
                const taskInstance = new Task(task.taskName, task.projectId, this.projectsList, task.taskId);
                taskInstance.createTask();
            }
          }
        }
        const newProjectName = document.getElementById("mainSquareTitleTextChild")
        newProjectName.textContent = "Today";
    }

    weekFilter() {

    }
}

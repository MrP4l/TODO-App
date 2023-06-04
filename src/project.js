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
        const mainSquareTitleTextChild = document.getElementById("mainSquareTitleTextChild");
        mainSquareTitleTextChild.innerText = this.projectName;
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

// add the tasks to the corrispective object project
export class Task {
    static id = 0;
    constructor(taskName, projectId, projectsList) {
        this.id = ++Task.id;
        this.taskName = taskName;
        this.projectId = projectId;
        this.projectsList = projectsList;
    }

    get taskId() {
        return this.id 
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

        const [day, month, year]= [
            new Date().getDate(),
            new Date().getMonth() + 1,
            new Date().getFullYear()
        ];
        newTaskDate.textContent = `${day}/${month}/${year}`;
        
        mainSquareTasksChild.appendChild(newTaskContainer);
        newTaskContainer.appendChild(newTaskIcon);
        newTaskContainer.appendChild(newTaskName);
        newTaskContainer.appendChild(newTaskDate);

        newTaskContainer.addEventListener("click", () => {
            this.deleteTask(newTaskContainer);
          });
      
        return newTaskContainer;
    }

    deleteTask() {
        const project = this.projectsList.find(project => project.id === this.projectId);
        if (project) {
          const taskIndex = project.tasks.findIndex(task => task.id === this.id);
          if (taskIndex !== -1) {
            project.tasks.splice(taskIndex, 1);
          }
        }
        const newTaskContainer = document.getElementById("newTaskContainer");
        newTaskContainer.remove();
    }
}

export class Project {
    static id = 0;

    constructor(projectName, projectsList) {
        this.projectName = projectName;
        this.projectsList = projectsList;
        this.id = ++Project.id;
    }

    get projectId() {
        return this.id 
    }

    createProject() {
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
export class Task extends Project {
    constructor(projectsList, projectId, taskName) {
        super(projectsList);
        this.taskId = projectId;
        this.taskName = taskName;
    }

    createTask() {
        const mainSquareTasksChild = document.getElementById("mainSquareTasksChild");
        
        const newTaskContainer = document.createElement("div");
        const newTaskIcon = document.createElement("div");
        const newTaskName = document.createElement("div");
        const newTaskColorContainer = document.createElement("div");
        const newTaskColorRed = document.createElement("div");
        const newTaskColorYellow = document.createElement("div");
        const newTaskColorGreen = document.createElement("div");
        const newTaskDate = document.createElement("div");

        newTaskContainer.id = "newTaskContainer";
        newTaskIcon.id = "newTaskIcon";
        newTaskName.id = "newTaskName";
        newTaskColorContainer.id = "newTaskColorContainer";
        newTaskColorRed.id = "newTaskColorRed";
        newTaskColorYellow.id = "newTaskColorYellow";
        newTaskColorGreen.id = "newTaskColorGreen";
        newTaskDate.id = "newTaskDate";

        newTaskName.textContent = this.taskName;
        const [day, month, year]= [
            new Date().getDate(),
            new Date().getMonth() + 1,
            new Date().getFullYear()
        ]
        newTaskDate.textContent = `${day}/${month}/${year}`;

        mainSquareTasksChild.appendChild(newTaskContainer);
        newTaskContainer.appendChild(newTaskIcon);
        newTaskContainer.appendChild(newTaskName);
        newTaskContainer.appendChild(newTaskColorContainer);
        newTaskColorContainer.appendChild(newTaskColorGreen);
        newTaskColorContainer.appendChild(newTaskColorYellow);
        newTaskColorContainer.appendChild(newTaskColorRed);
        newTaskContainer.appendChild(newTaskDate);

        return mainSquareTasksChild;
    }

    showTask() {

    }

    deleteTask() {
        
    }

}

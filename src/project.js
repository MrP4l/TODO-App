export class Project {
    static id = 0;

    constructor(projectName, projectsList) {
        this.projectName = projectName;
        this.projectsList = projectsList;
        this.id = ++Project.id;
    }

    deleteProject() {
        const index = this.projectsList.findIndex(project => project.id === this.id);
        if (index !== -1) {
            this.projectsList.splice(index, 1);
        }
        const newProjectDeleteButton = document.getElementById("newProjectDeleteButton");
        const parent = newProjectDeleteButton.parentNode;
        parent.remove();
    }

    renderProject() {
        const newProjectContainer = document.createElement("div");
        const newProjectName = document.createElement("div");
        const newProjectDeleteButton = document.createElement("div");
        const newNameTextfield = document.getElementById("newNameTextfieldInput");

        newProjectName.textContent = newNameTextfield.value;
        newProjectDeleteButton.classList.add("fa-solid");
        newProjectDeleteButton.classList.add("fa-trash");

        newProjectContainer.setAttribute("class", "newProjectContainer");
        newProjectName.setAttribute("class", "newProjectName");
        newProjectDeleteButton.setAttribute("id", "newProjectDeleteButton");

        sideColumnSecondChild.appendChild(newProjectContainer);
        newProjectContainer.appendChild(newProjectName);
        newProjectContainer.appendChild(newProjectDeleteButton);
    }

    showProject() {
        const index = this.projectsList.findIndex(project => project.id === this.id);

        if (index !== -1) {
            const project = this.projectsList[index];
            const mainSquareTitleTextChild = document.getElementById("mainSquareTitleTextChild");
            mainSquareTitleTextChild.innerText = project.projectName;
        }
    }
}

export class Task extends Project {
    constructor(projectName, projectsList) {
        super(projectName, projectsList);
    }

    addTask() {
    }

    deleteTask() {
        
    }

}

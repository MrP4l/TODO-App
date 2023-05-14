export class Project {
    constructor(id, projectName, projectsList) {
        this.id = id;
        this.projectName = projectName;
        this.projectsList = projectsList;
    }
    
    addTask() {


    }

    showTasks() {
        const mainSquareTitleTextChild = document.getElementById("mainSquareTitleTextChild");
        mainSquareTitleTextChild.innerText = this.projectName;
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
}

import { Project } from './project.js';
function addProject() {
    let projectsList = [];
    let id = 0;
    const sideColumnAddProjectContainer = document.getElementById("sideColumnAddProjectContainer");
    const sideColumnSecondChild = document.getElementById("sideColumnSecondChild");
    let open = false;
    sideColumnAddProjectContainer.addEventListener("click", () => {
        if (open) return;
        open = true;

        const newNameContainer = document.createElement("div");
        const newNameTextfield = document.createElement("input");
        const newNameAddButton = document.createElement("button");
        const newNameCancelButton = document.createElement("button");

        newNameContainer.setAttribute("id", "newNameContainer");
        newNameTextfield.setAttribute("type", "text");
        newNameTextfield.setAttribute("id", "newNameTextfieldInput");
        newNameAddButton.setAttribute("id", "newNameAddButton");
        newNameCancelButton.setAttribute("id", "newNameCancelButton");

        newNameContainer.appendChild(newNameTextfield);
        newNameContainer.appendChild(newNameAddButton);
        newNameContainer.appendChild(newNameCancelButton);
        sideColumnSecondChild.appendChild(newNameContainer);

        const secondChild = sideColumnSecondChild.children[1];
        sideColumnSecondChild.insertBefore(newNameContainer, secondChild);

        newNameAddButton.addEventListener("click", () => {
            if (newNameTextfield.value !== null && newNameTextfield.value !== "") {
                const newProjectContainer = document.createElement("div");
                const newProjectName = document.createElement("div");
                const newProjectDeleteButton = document.createElement("div");

                newProjectName.textContent = newNameTextfield.value;
                newProjectDeleteButton.classList.add("fa-solid");
                newProjectDeleteButton.classList.add("fa-trash");

                newProjectContainer.setAttribute("id", "newProjectContainer");
                newProjectName.setAttribute("id", "newProjectName");
                newProjectDeleteButton.setAttribute("id", "newProjectDeleteButton");

                sideColumnSecondChild.appendChild(newProjectContainer);
                newProjectContainer.appendChild(newProjectName);
                newProjectContainer.appendChild(newProjectDeleteButton);

                const projectName = newNameTextfield.value
                id += 1;
                const newProject = new Project(id, projectName, projectsList);
                projectsList.push(newProject);
                console.log(projectsList);

                newProjectContainer.addEventListener("click", () => {
                    newProject.showTasks();
                })

                newProjectDeleteButton.addEventListener("click", () => {
                    newProject.deleteProject();
                    // Add here the logic to remove the tasks window
                })
            }
            sideColumnSecondChild.removeChild(newNameContainer);
            open = false;
        });

        newNameCancelButton.addEventListener("click", () => {
            sideColumnSecondChild.removeChild(newNameContainer);
            open = false;
        });

    })
}


//export default addProject;
import { Project } from './project.js';
function userDynamicInterface() {
    const addProject = document.getElementById("sideColumnAddProjectContainer");
    const sideColumnSecondChild = document.getElementById("sideColumnSecondChild");
    let open = false;
    let projectsList = [];
    addProject.addEventListener("click", () => {
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
                const projectName = newNameTextfield.value;
                const newProject = new Project(projectName, projectsList);
                projectsList.push(newProject);
                //console.log(projectsList);

                newProject.renderProject();
                newProject.showTasks();
                
                // fix the title project on the mainSquare, the nth project after the first doesn't change the title
                // Add the possibility to delete the projects
                const projectItem = document.querySelectorAll(".newProjectContainer");
                projectItem.forEach((e, index) => {
   
                });  
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

export default userDynamicInterface;
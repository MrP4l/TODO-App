import { Project, Task } from "./project";
function userDynamicInterface() {
    const addProject = document.getElementById("sideColumnAddProjectContainer");
    const sideColumnSecondChild = document.getElementById("sideColumnSecondChild");
    let projectsList = [];
    let tasksList = [];
    let tasks = [];
    let projectId = 0;
    let taskId = 0;

    addProject.addEventListener("click", () => {
        if (sideColumnSecondChild.querySelector("#newNameContainer")) {
            return;
        }
        const newNameContainer = document.createElement("div");
        const newNameTextfield = document.createElement("input");
        const newNameAddButton = document.createElement("button");
        const newNameCancelButton = document.createElement("button");

        newNameContainer.id = "newNameContainer";
        newNameTextfield.setAttribute("type", "text");
        newNameTextfield.id = "newNameTextfieldInput";
        newNameAddButton.id = "newNameAddButton";
        newNameCancelButton.id = "newNameCancelButton";

        newNameContainer.appendChild(newNameTextfield);
        newNameContainer.appendChild(newNameAddButton);
        newNameContainer.appendChild(newNameCancelButton);
        sideColumnSecondChild.appendChild(newNameContainer);

        sideColumnSecondChild.insertBefore(newNameContainer, sideColumnSecondChild.children[1]);

        newNameAddButton.addEventListener("click", () => {
            const projectName = newNameTextfield.value.trim();
            if (projectName !== "") {
                const newProject = new Project(projectName, projectsList);
                projectsList.push(newProject);

                const newProjectContainer = newProject.createProject();
                newProject.showProject();
                projectId = newProject.projectId;

                console.log("last proj creat:", projectsList, projectId);

                newProjectContainer.addEventListener("click", () => {
                    newProject.showProject();
                    projectId = newProject.projectId;
                    console.log("click proj:", projectsList, projectId);
                });
            }
            sideColumnSecondChild.removeChild(newNameContainer);
        });

        newNameCancelButton.addEventListener("click", () => {
            sideColumnSecondChild.removeChild(newNameContainer);
        });
    })

    const addTask = document.getElementById("mainSquareTitleIconChild");
    const mainSquareTasksChild = document.getElementById("mainSquareTasksChild");
    addTask.addEventListener("click", () => {
        if (mainSquareTasksChild.querySelector(".taskNameContainer")) {
            return;
        }
        if (projectsList.length === 0) {
            return;
        }
        const taskNameContainer = document.createElement("div");
        const taskNameInput = document.createElement("input");
        const taskNameAdd = document.createElement("button");
        const taskNameCancel = document.createElement("button");

        taskNameContainer.setAttribute("class", "taskNameContainer");
        taskNameInput.setAttribute("type", "text");
        taskNameInput.id = "taskNameInput";
        taskNameAdd.id = "taskNameAdd";
        taskNameCancel.id = "taskNameCancel";

        taskNameContainer.appendChild(taskNameInput);
        taskNameContainer.appendChild(taskNameAdd);
        taskNameContainer.appendChild(taskNameCancel);
        mainSquareTasksChild.appendChild(taskNameContainer);

        mainSquareTasksChild.insertBefore(taskNameContainer, mainSquareTasksChild.children[0]);

        // TODO
        // click to delete
        // Add a centralized module with arrays and functs like date
        taskNameAdd.addEventListener("click", () => {
            const taskName = taskNameInput.value.trim();
            if (taskName !== "") {
                const newTask = new Task(taskName, projectId);
                tasksList.push(newTask);

                newTask.createTask();
                taskId = newTask.taskId;

                const [day, month, year] = [
                    new Date().getDate(),
                    new Date().getMonth() + 1,
                    new Date().getFullYear()
                ];
                const date = `${day}/${month}/${year}`;
                tasksList[taskId - 1]["date"] = date;

                projectsList[projectId - 1].tasks.push(newTask);
                console.log("test:", projectsList)

            }
            mainSquareTasksChild.removeChild(taskNameContainer);
        })
        taskNameCancel.addEventListener("click", () => {
            mainSquareTasksChild.removeChild(taskNameContainer);
        })
    });
}

export default userDynamicInterface;
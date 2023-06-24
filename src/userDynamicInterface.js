import { Project, Task, Filter} from "./project";
function userDynamicInterface() {
    const addProject = document.getElementById("sideColumnAddProjectContainer");
    const sideColumnSecondChild = document.getElementById("sideColumnSecondChild");
    let projectsList = [];
    let tasksList = [];
    let projectId = 0;
    let taskId = 0;

    addProject.addEventListener("click", () => {
        if (sideColumnSecondChild.querySelector("#newNameContainer")) {
            const newNameContainer = document.getElementById("newNameContainer");
            sideColumnSecondChild.removeChild(newNameContainer);
            return;
        }
        const newNameContainer = document.createElement("div");
        const newNameTextfield = document.createElement("input");
        const newNameAddButton = document.createElement("i");
        const newNameCancelButton = document.createElement("i");

        newNameContainer.id = "newNameContainer";
        newNameTextfield.setAttribute("type", "text");
        newNameTextfield.id = "newNameTextfieldInput";
        newNameTextfield.placeholder = "Add a new project";
        newNameAddButton.id = "newNameAddButton";
        newNameAddButton.classList.add("gg-math-plus");
        newNameCancelButton.id = "newNameCancelButton";
        newNameCancelButton.classList.add("gg-math-plus");

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

                newProjectContainer.addEventListener("click", () => {
                    newProject.showProject();
                    projectId = newProject.projectId;
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
        taskNameInput.placeholder = "Add a task";
        taskNameAdd.id = "taskNameAdd";
        taskNameCancel.id = "taskNameCancel";

        taskNameContainer.appendChild(taskNameInput);
        taskNameContainer.appendChild(taskNameAdd);
        taskNameContainer.appendChild(taskNameCancel);
        mainSquareTasksChild.appendChild(taskNameContainer);

        mainSquareTasksChild.insertBefore(taskNameContainer, mainSquareTasksChild.children[0]);

        // TODO
        // Add a centralized module with arrays and functs like date
        taskNameAdd.addEventListener("click", () => {
            const taskName = taskNameInput.value.trim();
            if (taskName !== "") {
                ++taskId;
                const newTask = new Task(taskName, projectId, projectsList, taskId);
                tasksList.push(newTask);

                newTask.createTask();

                projectsList[projectId - 1].tasks.push(newTask);
            }
            mainSquareTasksChild.removeChild(taskNameContainer);
        })
        taskNameCancel.addEventListener("click", () => {
            mainSquareTasksChild.removeChild(taskNameContainer);
        })
    });

    const parent = document.getElementById("sideColumnFirstChild");
    const dateFilters = parent.querySelectorAll("*");
    dateFilters.forEach(child => {
        child.addEventListener("click", (event) => {
            event.stopPropagation();
            const filter = new Filter(projectsList);
            if (child.id === "sideColumnAllContainer") {
                filter.allFilter();
            } else if (child.id === "sideColumnTodayContainer") {
                filter.todayFilter();
            } else if (child.id === "sideColumnWeekContainer") {
                filter.weekFilter();
            }
        })
    })
}



export default userDynamicInterface;
import { Project, Task } from "./project";
function userDynamicInterface() {
    const addProject = document.getElementById("sideColumnAddProjectContainer");
    const sideColumnSecondChild = document.getElementById("sideColumnSecondChild");
    const projectsList = [];

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

                newProjectContainer.addEventListener("click", () => {
                    newProject.showProject();
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

        mainSquareTasksChild.insertBefore(taskNameContainer, mainSquareTasksChild.children[1]);

        // TODO
        taskNameAdd.addEventListener("click", () => {
            const taskName = taskNameInput.value.trim();
            if (taskName !== "" && projectsList.length !== 0) {

                

                const newTaskContainer = document.createElement("div");
                const newTaskIcon = document.createElement("div");
                const newTaskName = document.createElement("div");
                const newTaskColorContainer = document.createElement("div");
                const newTaskColorRed = document.createElement("div");
                const newTaskColorYellow = document.createElement("div");
                const newTaskColorGreen = document.createElement("div");
                const newTaskDate = document.createElement("div");

                newTaskContainer.setAttribute("id", "newTaskContainer");
                newTaskIcon.setAttribute("id", "newTaskIcon");
                newTaskName.setAttribute("id", "newTaskName");
                newTaskColorContainer.setAttribute("id", "newTaskColorContainer");
                newTaskColorRed.setAttribute("id", "newTaskColorRed");
                newTaskColorYellow.setAttribute("id", "newTaskColorYellow");
                newTaskColorGreen.setAttribute("id", "newTaskColorGreen");
                newTaskDate.setAttribute("id", "newTaskDate");

                mainSquareTasksChild.appendChild(newTaskContainer);
                newTaskContainer.appendChild(newTaskIcon);
                newTaskContainer.appendChild(newTaskName);
                newTaskContainer.appendChild(newTaskColorContainer);
                newTaskColorContainer.appendChild(newTaskColorRed);
                newTaskColorContainer.appendChild(newTaskColorYellow);
                newTaskColorContainer.appendChild(newTaskColorGreen);
                newTaskContainer.appendChild(newTaskDate);
            }
            mainSquareTasksChild.removeChild(taskNameContainer);
        })

        taskNameCancel.addEventListener("click", () => {
        })
    });
}

//function addTask() {
//    const addTask = document.getElementById("mainSquareTitleIconChild");
//    const mainSquareTasksChild = document.getElementById("mainSquareTasksChild");
//    addTask.addEventListener("click", () => {
//        if (mainSquareTasksChild.querySelector(".taskNameContainer")) {
//            return;
//        }
//        const taskNameContainer = document.createElement("div");
//        const taskNameInput = document.createElement("input");
//        const taskNameAdd = document.createElement("button");
//        const taskNameCancel = document.createElement("button");
//
//        taskNameContainer.setAttribute("class", "taskNameContainer");
//        taskNameInput.setAttribute("type", "text");
//        taskNameInput.id = "taskNameInput";
//        taskNameAdd.id = "taskNameAdd";
//        taskNameCancel.id = "taskNameCancel";
//
//        taskNameContainer.appendChild(taskNameInput);
//        taskNameContainer.appendChild(taskNameAdd);
//        taskNameContainer.appendChild(taskNameCancel);
//        mainSquareTasksChild.appendChild(taskNameContainer);
//
//        mainSquareTasksChild.insertBefore(taskNameContainer, mainSquareTasksChild.children[1]);
//
//        // TODO
//        taskNameAdd.addEventListener("click", () => {
//            const taskName = taskNameInput.value.trim();
//            if (taskName !== "" && projectsList.length !== 0) {
//
//                //const mainSquareTasksChild = document.getElementById("mainSquareTasksChild");
//
//                // maybe with Project class
//                // if the input field is not empty -> create the task div with his children
//                // task div children:
//                // check/an icon, the task name, tasks creation date, the icon to delete the task
//                // task div funct:
//                // click on the task div --> delete this.task
//                //const newProject = new Project(projectName, projectsList);
//                //projectsList.push(newProject);
//                //
//                //const newProjectContainer = newProject.createProject();
//                //newProject.showProject();
//                //
//                //newProjectContainer.addEventListener("click", () => {
//                //    newProject.showProject();
//                //
//
//                const newTaskContainer = document.createElement("div");
//                const newTaskIcon = document.createElement("div");
//                const newTaskName = document.createElement("div");
//                const newTaskColorContainer = document.createElement("div");
//                const newTaskColorRed = document.createElement("div");
//                const newTaskColorYellow = document.createElement("div");
//                const newTaskColorGreen = document.createElement("div");
//                const newTaskDate = document.createElement("div");
//
//                newTaskContainer.setAttribute("id", "newTaskContainer");
//                newTaskIcon.setAttribute("id", "newTaskIcon");
//                newTaskName.setAttribute("id", "newTaskName");
//                newTaskColorContainer.setAttribute("id", "newTaskColorContainer");
//                newTaskColorRed.setAttribute("id", "newTaskColorRed");
//                newTaskColorYellow.setAttribute("id", "newTaskColorYellow");
//                newTaskColorGreen.setAttribute("id", "newTaskColorGreen");
//                newTaskDate.setAttribute("id", "newTaskDate");
//
//                mainSquareTasksChild.appendChild(newTaskContainer);
//                newTaskContainer.appendChild(newTaskIcon);
//                newTaskContainer.appendChild(newTaskName);
//                newTaskContainer.appendChild(newTaskColorContainer);
//                newTaskColorContainer.appendChild(newTaskColorRed);
//                newTaskColorContainer.appendChild(newTaskColorYellow);
//                newTaskColorContainer.appendChild(newTaskColorGreen);
//                newTaskContainer.appendChild(newTaskDate);
//            }
//            mainSquareTasksChild.removeChild(taskNameContainer);
//        })
//
//        taskNameCancel.addEventListener("click", () => {
//        })
//    });
//}
//
//function userDynamicInterface() {
//    addProject();
//    addTask();
//}

export default userDynamicInterface;
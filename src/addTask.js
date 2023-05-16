import { Project } from './project.js';
function addTask() {
    const addTaskIcon = document.getElementById("mainSquareTitleIconChild");
    let open = false;
    addTaskIcon.addEventListener("click", () => {
        if (open) return;
        open = true;

        const mainSquareTasksChild = document.getElementById("mainSquareTasksChild");

        const taskNameContainer = document.createElement("div");
        const taskNameInput = document.createElement("input");
        const taskNameAdd = document.createElement("button");
        const taskNameCancel = document.createElement("button");

        taskNameContainer.setAttribute("id", "taskNameContainer");
        taskNameInput.setAttribute("type", "text");
        taskNameInput.setAttribute("id", "taskNameInput");
        taskNameAdd.setAttribute("id", "taskNameAdd");
        taskNameCancel.setAttribute("id", "taskNameCancel");

        taskNameContainer.appendChild(taskNameInput);
        taskNameContainer.appendChild(taskNameAdd);
        taskNameContainer.appendChild(taskNameCancel);
        mainSquareTasksChild.appendChild(taskNameContainer);

        taskNameAdd.addEventListener("click", () => {
            if (taskNameInput.value !== null && taskNameInput.value !== "") {
                //newProject.addTask();
                const mainSquareTasksChild = document.getElementById("mainSquareTasksChild");

                // maybe with Project class
                // if the input field is not empty -> create the task div with his children
                // task div children:
                // check/an icon, the task name, tasks creation date, the icon to delete the task
                // task div funct:
                // click on the task div --> delete this.task
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
            open = false;
        })

        taskNameCancel.addEventListener("click", () => {

        })
    });


}

export default addTask;
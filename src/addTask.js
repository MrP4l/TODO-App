import { Project } from './classes.js';
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
                // maybe with Project class
                // if the input field is not empty -> create the task div with his children
                // task div children:
                // check/an icon, the task name, tasks creation date, the icon to delete the task
                // task div funct:
                // click on the task div --> delete this.task
            }
            mainSquareTasksChild.removeChild(taskNameContainer);
            open = false;

        })

        taskNameCancel.addEventListener("click", () => {
            
        })
    });


}

export default addTask;
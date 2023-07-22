export const projectsList = [];
import { Project } from "./project_class";
import { Task } from "./task_class";
import { Filter } from "./filters_class";
import { UI } from "./ui_class";

function userDynamicInterface() {
    const addProject = document.getElementById("sideColumnAddProjectContainer");
    const sideColumnSecondChild = document.getElementById("sideColumnSecondChild");
    let projectDataId = 0;

    const userInterface = new UI();
    //  Click to open or close the box Add Project
    addProject.addEventListener("click", () => {
        if (sideColumnSecondChild.querySelector("#newNameContainer")) {
            const projectNameContainer = document.querySelector("#newNameContainer");
            sideColumnSecondChild.removeChild(projectNameContainer);
            return;
        }
        userInterface.addANewProjectBox();
        //  Click the green button to create a new project
        newNameAddButton.addEventListener("click", () => {
            const newNameTextfield = document.getElementById("newNameTextfieldInput");
            const projectName = newNameTextfield.value.trim();
            if (projectName !== "") {
                const project = new Project(projectName);
                projectsList.push(project);
                projectDataId = project.id;

                userInterface.createANewProjectInterface(project);

                console.log(projectsList);
                //  Rendering the project clicked
                const projects = document.querySelectorAll(".newProjectContainer");
                projects.forEach(project => {
                    const projectId = project.dataset.id;
                    const projectData = projectsList.find(project => project.id === parseInt(projectId));
                    project.addEventListener("click", () => {
                        console.log("projectData:", projectData)
                        userInterface.renderProject(projectData);
                        //    userInterface.createANewProjectInterface(projectData);
                        projectDataId = projectData.id;
                        const tasks = document.querySelectorAll(".newTaskContainer");
                        tasks.forEach(task => {
                            const taskId = task.dataset.id;
                            const index = projectsList.findIndex(project => projectDataId === parseInt(project.id))
                            const taskData = projectsList[index].tasks.find(task => task.id === parseInt(taskId))
                            task.addEventListener("click", () => {
                                console.log("tskid:", taskId);
                                const taskObj = new Task;
                                taskObj.deleteTask(taskData);
                                userInterface.deleteTask(taskData);
                                console.log("prjList-task after del1:", projectsList)
                            })
                        })
                    });
                });
                //  Click the delete project button to delete the project
                const deleteButtons = document.querySelectorAll(".newProjectDeleteButton");
                deleteButtons.forEach(button => {
                    const deleteButtonParent = button.closest(".newProjectContainer");
                    const projectId = deleteButtonParent.dataset.id;
                    const projectData = projectsList.find(project => project.id === parseInt(projectId));
                    button.addEventListener("click", () => {
                        project.deleteProject(projectData);
                        userInterface.deleteProject(projectData);
                    })
                })
            }
            sideColumnSecondChild.removeChild(newNameContainer);
        });
        newNameCancelButton.addEventListener("click", () => {
            sideColumnSecondChild.removeChild(newNameContainer);
        });
    })

    const addTask = document.getElementById("mainSquareTitleIconChild");
    const mainSquareTasksChild = document.getElementById("mainSquareTasksChild");
    //  Click to open the box for add a task
    addTask.addEventListener("click", () => {
        if (mainSquareTasksChild.querySelector(".taskNameContainer")) {
            const taskNameContainer = document.querySelector(".taskNameContainer");
            mainSquareTasksChild.removeChild(taskNameContainer);
            return;
        }
        userInterface.addANewTaskBox();

        const taskBox = document.querySelector(".taskNameContainer");
        taskNameAdd.addEventListener("click", () => {
            const taskName = taskNameInput.value.trim();
            if (taskName !== "") {
                const index = projectsList.findIndex(project => projectDataId === parseInt(project.id))
                const parentId = index;
                const task = new Task(taskName, parentId);
                projectsList[index].tasks.push(task);
                userInterface.createTask(task);
                console.log("task:", task)
                console.log("prjListAfterAddTask:", projectsList)
                //  Click the task to delete it
                const tasks = document.querySelectorAll(".newTaskContainer");
                tasks.forEach(task => {
                    const taskId = task.dataset.id;
                    const index = projectsList.findIndex(project => projectDataId === parseInt(project.id))
                    const taskData = projectsList[index].tasks.find(task => task.id === parseInt(taskId))
                    task.addEventListener("click", () => {
                        console.log("tskid:", taskId);
                        const taskObj = new Task;
                        taskObj.deleteTask(taskData);
                        console.log("prjList-task after del2:", projectsList);
                        userInterface.deleteTask(taskData)
                    })
                })
            }
            mainSquareTasksChild.removeChild(taskBox);
        })
        taskNameCancel.addEventListener("click", () => {
            mainSquareTasksChild.removeChild(taskBox);
        })
    });

    const parent = document.getElementById("sideColumnFirstChild");
    const dateFilters = parent.querySelectorAll("*");
    dateFilters.forEach(date => {
        date.addEventListener("click", (event) => {
            event.stopPropagation();
            const filter = new Filter();
            if (date.id === "sideColumnAllContainer") {
                filter.allFilter();
            } else if (date.id === "sideColumnTodayContainer") {
                filter.todayFilter();
            } else if (date.id === "sideColumnWeekContainer") {
                filter.weekFilter();
            }
        })
    })
}

export default userDynamicInterface;
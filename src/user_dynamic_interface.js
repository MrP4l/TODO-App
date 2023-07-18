export const projectsList = [];
import { Project } from "./project_class";
import { Task } from "./task_class";
import { Filter } from "./filters_class";
import { UI } from "./ui_class";

function userDynamicInterface() {
    const addProject = document.getElementById("sideColumnAddProjectContainer");
    const sideColumnSecondChild = document.getElementById("sideColumnSecondChild");
    let projectDataId = 0;

    const userInterface = new UI(projectsList);
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
                        userInterface.renderProject(projectData);
                        projectDataId = projectData.id;
                        // TODO Maybe add here the tasks part
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
                        userInterface.deleteInterface(projectData);
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
                const task = new Task(taskName);
                const index = projectsList.findIndex(project => projectDataId === parseInt(project.id))
                projectsList[index].tasks.push(task);
                userInterface.createTask(task);
                console.log("task:", task)
                console.log("prjListAfterAddTask:", projectsList)
                //  Click the task to delete it
            //    const tasks = document.querySelectorAll(".newTaskContainer");
            //    tasks.forEach(task => {
            //        // TODO To finish
            //        task.addEventListener("click", () => {
            //            console.log("ttt:", Task.id)
            //            const taskId = task.dataset.id;
            //            console.log(taskId);
            //        })
            //    })
            }
            mainSquareTasksChild.removeChild(taskBox);
        })
        taskNameCancel.addEventListener("click", () => {
            mainSquareTasksChild.removeChild(taskBox);
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
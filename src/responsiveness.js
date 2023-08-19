function dropDownMenuButton() {
    const mediaQuery = window.matchMedia('(max-width: 430px)');
    const button = document.getElementById("button");

    if (mediaQuery.matches) {
        if (!button) {
            createButton();
        }
    } else {
        const button = document.getElementById("button");
        if (button) {
            button.remove();
        }
    }
}

function createButton() {
    const sideAndMainContainer = document.getElementById("sideAndMainContainer");
    const button = document.createElement("button");
    const arrow = document.createElement("i");

    button.id = "button";
    arrow.id = "arrow";

    arrow.classList.add("bx");
    arrow.classList.add("bx-chevron-down");

    button.appendChild(arrow);
    sideAndMainContainer.prepend(button);

    return button;
}

export function createDropDownMenu() {
    dropDownMenuButton();

    const button = document.getElementById("button");
    const sideColumn = document.getElementById("sideColumn");
    const toggleArrow = document.getElementById("arrow");

    sideColumn.classList.add("sideColumn");

    const toggleDropdown = () => {
        sideColumn.classList.toggle("hide");
        toggleArrow.classList.toggle("arrow");
    };
    
    if (button) {
        button.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            toggleDropdown();
            const taskBoxParent = document.getElementById("mainSquareTasksChild");
            const taskBox = document.querySelector(".taskNameContainer");
            if (taskBox) {
                taskBoxParent.removeChild(taskBox);
            }
        })
    }

    const projects = document.querySelectorAll(".newProjectContainer");
    const filters = document.querySelectorAll(".filter");
    [...projects, ...filters].forEach(item => {
        item.addEventListener("click", () => {
            if (button) {
                toggleDropdown();
            }
        });
    });

    window.addEventListener('resize', createDropDownMenu);
}

export default createDropDownMenu;
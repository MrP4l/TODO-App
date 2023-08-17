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

function createDropDownMenu() {
    dropDownMenuButton();

    const button = document.getElementById("button");
    const sideColumn = document.getElementById("sideColumn");
    const toggleArrow = document.getElementById("arrow");

    sideColumn.classList.add("sideColumn");
    // TODO add the hidden to overflow-y on content container when the dropdown is toggled
    const toggleDropdown = () => {
        sideColumn.classList.toggle("show");
        toggleArrow.classList.toggle("arrow");
      };

    if (button) {
        button.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            toggleDropdown();
        })
    }
    window.addEventListener('resize', createDropDownMenu);
}

export default createDropDownMenu;
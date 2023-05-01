function addProject() {
        const addEvent = document.getElementById("sideColumnAddProjectContainer"); 
        const sideColumnSecondChild = document.getElementById("sideColumnSecondChild");
        let open = false;
        addEvent.addEventListener("click", () => {
            if (open) return;
            open = true;

            const newNameContainer = document.createElement("div");
            const newNameTextfield = document.createElement("input");
            const newNameAddButton = document.createElement("button");
            const newNameCancelButton = document.createElement("button");

            newNameContainer.setAttribute("id", "newNameContainer");
            newNameTextfield.setAttribute("type", "text");
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
                    const newProjectContainer = document.createElement("div");
                    const newProjectName = document.createElement("div");
                    const newProjectDeleteButton = document.createElement("div");

                    newProjectName.textContent = newNameTextfield.value;
                    
                    newProjectContainer.setAttribute("id", "newProjectContainer");
                    newProjectName.setAttribute("id", "newProjectName");
                    newProjectDeleteButton.setAttribute("id", "newProjectDeleteButton");

                    sideColumnSecondChild.appendChild(newProjectContainer);
                    newProjectContainer.appendChild(newProjectDeleteButton);
                    newProjectContainer.appendChild(newProjectName);
                }
                sideColumnSecondChild.removeChild(newNameContainer);
                open = false;
            })

            newNameCancelButton.addEventListener("click", () => {
                sideColumnSecondChild.removeChild(newNameContainer);
                open = false;

            });
        })
}

export default addProject;
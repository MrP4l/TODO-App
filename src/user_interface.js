import userStaticInterface from "./user_static_interface";
import userDynamicInterface from "./user_dynamic_interface";
import createDropDownMenu from "./responsiveness";

function userInterface() {
    userStaticInterface();
    userDynamicInterface();
    createDropDownMenu();
};

export default userInterface;
# TODO-App

Project developed with the aim of practicing the use of webpack, native Javascript and OOP programming. The web application was obtained with the use of native Javascript, without the use of frameworks or external libraries except for the date-fns library to manipulate dates more easily. To make the application responsive I used the CLAMP function of css and for minor resolutions the media queries. Storage was achieved with the use of LocalStorage. In an early version of the code I had mixed too much application logic with DOM manipulation, so I reworked the code and tried to make them as independent as possible from each other. In retrospect, I can say that there was a lack of adequate initial planning of the features that the application should have, this meant that the code was not written in the best possible way. 

----
## Usage
1. Add a project with any name by pressing 'Add Project' (Example: Shopping for the house)'
2. Add the tasks related to the project by pressing on the '+' to the right of the project name (Example: 'Mango', 'Fish', 'Avocado')
3. To cancel a task just click on it
4. To delete a project press the trash symbol
5. In the sidebar (in the mobile version in the dropdown menu) it is possible to press on three different filters ('All', 'Week', 'Today') these will show all the tasks created regardless of the project in which they are contained that reflect the filter pressed (all tasks will be shown if you press 'All', tasks created in the current week if you press 'Week', tasks created today if you press 'Today')
----
Inspired by The Odin Project - @theodinproject - https://www.theodinproject.com/lessons/node-path-javascript-todo-list
import startmenu from "./start-menu";

export default function taskbar() {
    const taskBar = document.createElement('div');
    taskBar.classList.add('taskbar');

    taskBar.appendChild(startmenu());

    return taskBar;
}
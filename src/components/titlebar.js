export default function titlebar(windowTitle, appWindow) {
    const titleBar = document.createElement('header');
    titleBar.classList.add('title-bar');

    const title = document.createElement('span');
    title.classList.add('title');
    title.innerText = windowTitle;

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');

    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fas', 'fa-times', 'close');

    titleBar.appendChild(title);
    closeButton.appendChild(closeIcon);
    titleBar.appendChild(closeButton);

    titleBar.addEventListener('mouseover', () => {
        appWindow.setAttribute('draggable', true);
        console.log(appWindow.draggable);
    });

    titleBar.addEventListener('mouseleave', () => {
        appWindow.setAttribute('draggable', false);
        console.log(appWindow.draggable);
    })

    return titleBar;
}
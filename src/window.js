import titlebar from "./components/titlebar";

export default function window(windowTitle) {
    const appWindow = document.createElement('div');
    appWindow.classList.add('window');

    appWindow.appendChild(titlebar(windowTitle, appWindow));

    appWindow.addEventListener('drag', () => {
      console.log(appWindow.clientTop);
      console.log(appWindow.clientLeft);
    })

    return appWindow;
  }
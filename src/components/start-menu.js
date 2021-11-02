export default function startmenu() {
    const startButton = document.createElement('button');
    startButton.classList.add('start-button');
    
    const startIcon = document.createElement('i');
    startIcon.classList.add('fas', 'fa-bars');

    startButton.appendChild(startIcon);
    return startButton;
}
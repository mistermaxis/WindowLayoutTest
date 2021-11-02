import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import window from './window.js';
import taskbar from './components/taskbar.js';
import './style.css';

const desktop = document.getElementById('desktop');

desktop.appendChild(window('My Window'));
desktop.appendChild(taskbar());

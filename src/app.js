import {h, render} from "preact";
import App from "./components/App";

const root = document.getElementById('appTarget');
const target = document.querySelector('.renderTarget');

render(<App/>, root, target);
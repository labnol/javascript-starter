import { add } from './components/maths';

const x = 10;
const y = 32;

const root = document.getElementById('root');
root.innerHTML = `${x} + ${y} = ${add(x, y)}`;

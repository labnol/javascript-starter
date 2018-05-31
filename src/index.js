import './styles/index.scss';
import { add } from './components/maths';

const x = 2;
const y = 4;

const root = document.getElementById('root');
root.innerHTML = `${x} + ${y} = ${add(x, y)}`;

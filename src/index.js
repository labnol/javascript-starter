import './styles/index.scss';
import { add } from './components/maths';

const x = 21;
const y = 46;

const root = document.getElementById('root');
root.innerHTML = `${x} + ${y} = ${add(x, y)}`;

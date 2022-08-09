import range from 'lodash/range';
import shuffle from 'lodash/shuffle';
import { add } from './components/maths';

const x = 10;
const y = 32;

const root = document.getElementById('root');
root.innerHTML = `${x} + ${y} = ${add(x, y)}`;

const array = range(0, 100, 10);
const shuffledArray = shuffle(array);
root.innerHTML += `<br /><br />${array} => ${shuffledArray}`;

root.innerHTML += `<br /><br />The current date is ${new Date().toDateString()}`;

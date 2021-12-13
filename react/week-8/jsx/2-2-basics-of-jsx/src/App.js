import logo from './logo.svg';
import './App.css';

const data = ['hello', 'world'];
function capitalizeArr(arr) {
    return arr.map((str) => str[0].toUpperCase() + str.slice(1)).join(' ');
}

const number1 = 5;
const number2 = 6;

const string = 'I love React!';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>{capitalizeArr(data)}</p>
                <p>{number1 + number2}</p>
                <p>{`The length of string "${string}" is ${string.length}`}</p>
            </header>
        </div>
    );
}

export default App;

import logo from './logo.svg';
import './App.css';

export const order = {
  "size": 1,
  "price": 2,
  "min_price": 12,
  "max_price": 24,
  "symbol": "NGF4",
  "date": "20230404",
  "suborders": [],
  "rem": 12,
  "id": 0
}

export const generateExactData = (size) => {
  var orders = [];
  for (var i = 0; i < size; i++) {
    orders.push({ ...order, id: i, min_price: 12, suborder: [{ ...order }] });
  }
  return orders;

}

export const generateDifftDataAtFirstPos = (size) => {
  var orders = [];
  for (var i = 0; i < size; i++) {
    if (i === 0) orders.push({ ...order, id: i, min_price: Math.random(), suborder: [{ ...order }] });
    else orders.push({ ...order, id: i, min_price: 12, suborder: [{ ...order }] });
  }
  return orders;

}

function getRandomNumber(a, b) {
  // Ensure a <= b
  if (a > b) {
    [a, b] = [b, a];
  }

  // Generate a random number between 0 (inclusive) and 1 (exclusive)
  let random = Math.random();

  // Scale the random number to be between a and b
  let randomNumber = Math.floor(random * (b - a + 1)) + a;

  return randomNumber;
}

export const generateDifftDataAtStartingX = (size, percent) => {
  var orders = [];
  const startPos = Math.ceil(size * (percent - 2) / 100);
  const endPos = Math.ceil(size * (percent + 2) / 100);

  const posToDiffer = getRandomNumber(startPos, endPos);

  for (var i = 0; i < size; i++) {
    if (i === posToDiffer) orders.push({ ...order, id: i, min_price: Math.random(), suborder: [{ ...order }] });
    else orders.push({ ...order, id: i, min_price: 12, suborder: [{ ...order }] });
  }
  return orders;

}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

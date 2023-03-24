import './index.css';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';

function App() {
  return (
    <>
      <div className="app">
        <Quote />
        <Calculator />
      </div>
    </>
  );
}

export default App;

import './index.css';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';

function App() {
  return (
    <>
      <div className="app">
        <Quote apiKey="cnTlCQ/IFnLNbxvOCXF7fQ==9kiKfPTsk03LKemN" />
        <Calculator />
      </div>
    </>
  );
}

export default App;

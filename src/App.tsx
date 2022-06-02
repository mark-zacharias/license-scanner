import React from 'react';
import logo from './logo.svg';
import './App.css';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

function App() {
  return (
    <div className="App">
      <BarcodeScannerComponent width={500} height={500} onUpdate={(one, two) => console.log(one, two)} />
    </div>
  );
}

export default App;

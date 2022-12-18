import Header from './Header/Header';

import { Button } from 'element-react';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Button type="primary">Primary Button</Button>
    </div>
  );
}

export default App;

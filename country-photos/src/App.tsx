import { useState } from 'react';
import 'element-theme-default';

import Header from './Header/Header';
import Content from './Content/Content';

import './App.css';

const App = (): JSX.Element => {
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(true);
  
  return (
    <div className="App">
      <Header onClick={() => {setIsAsideOpen(!isAsideOpen)}}></Header>
      <Content isAsideOpen={isAsideOpen}></Content>
    </div>
  );
}

export default App;

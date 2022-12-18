import 'element-theme-default';

import Header from './Header/Header';
import Content from './Content/Content';

import './App.css';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default App;

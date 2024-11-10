import logo from './logo.svg';
import './App.css';

import AppHeader from './ui-components/AppHeader';
import BoxScene from './3D/BoxScene';
import TextScene from "./3D/TextScene";

function App() {
  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
      <main className='App-main'>
        {/* <BoxScene /> */}
        <TextScene />
      </main>
    </div>
  );
}

export default App;

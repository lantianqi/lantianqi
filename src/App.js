import logo from './logo.svg';
import './App.css';

import { Leva } from 'leva';

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
        <div className='Leva-panel-div'>
          <Leva fill collapsed/>
        </div>
      </main>
    </div>
  );
}

export default App;

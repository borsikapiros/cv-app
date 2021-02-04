
import './App.css';
import { ResetBtn } from './components/resetbtn';
import { LeftTile } from './components/lefttile';
import { RightTile } from './components/righttile';
import { useState } from 'react';



function App() {

  const [text, setText] = useState("");


  return (
    <div className="App">
      <ResetBtn onClick={(event) => setText("")}></ResetBtn>
      <div className="container">
        <LeftTile
          value={text}
          onInput={(event) => setText(event.target.value)}></LeftTile>
        <RightTile>{text}</RightTile>
      </div>
    </div>
  );
}

export default App;

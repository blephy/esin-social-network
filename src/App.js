import { useState } from "react";
import "./App.css";

// state management
// redux / rxjs
const state = new Map();

function Children2() {
  const value = state.get('toto');

  return <div>world {value} !</div>
}
function Children1() {
  return <div>hello <Children2 /></div>
}
function App() {
  const [toto, setToto] = useState("Vivien");

  state.set('toto', toto);

  return (
    <div className="App">
      {/* <input value={toto} onChange={(event) => setToto(event.target.value)} /> */}
      <Children1 />
    </div>
  );
}

export default App;

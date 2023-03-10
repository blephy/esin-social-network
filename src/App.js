import { Outlet } from "react-router";
import "./App.css";

import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

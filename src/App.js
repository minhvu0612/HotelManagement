import './App.css';
import { router } from './Router/Router';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {
            router.map((element, key) => 
              <Route exact = {element.exact} path = {element.path} element = {element.main} key = {key} />
            )
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import './style.css';
import Home from './components/home/Home';
import Sports from './components/sports/Sports'
import 'antd/dist/antd.css';
import News from './components/news/News';
import {
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <p>Get Dance-y</p>
     <h4>Who's DANCING!</h4>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/sports">Sports</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/sports" element={<Sports/>}/>
      </Routes>
    </div>
  );
}

export default App;

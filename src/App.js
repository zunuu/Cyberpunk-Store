import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Reviews from './Components/Reviews/Reviews'
import Home from './Components/Home/Home'
import Blogs from './Components/Blogs/Blogs'
import NotFound from './Components/NotFound/NotFound'
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path='/dashboards' element={<Dashboard></Dashboard>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

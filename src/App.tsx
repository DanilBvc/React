import { Component, ReactNode } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutUs } from './component/about/AboutUs';
import { NotFound } from './component/notFound/notFound';
import { Main } from './component/main/Main';
import './App.css';
class App extends Component {
  render(): ReactNode {
    return (
      <div>
        <div className="nav-wrapper">
          <Link to={'/about'} className="nav-link">
            about
          </Link>
          <Link to={'/'} className="nav-link">
            home
          </Link>
        </div>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}
export default App;

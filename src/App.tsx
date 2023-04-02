import { Component, ReactNode } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Forms from './pages/Forms/Forms';
import Main from './component/main/Main';
import NotFound from './component/notFound/notFound';
import AboutUs from './component/about/AboutUs';
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
          <Link to={'/forms'} className="nav-link">
            forms
          </Link>
        </div>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </div>
    );
  }
}
export default App;

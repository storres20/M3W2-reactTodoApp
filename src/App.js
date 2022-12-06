import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import AboutApp from './pages/AboutApp';
import AboutAuthor from './pages/AboutAuthor';
import NotMatch from './pages/NotMatch';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/about-app" element={<AboutApp />} />
        <Route path="/about/about-author" element={<AboutAuthor />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default App;

import './App.css';
import Navbar  from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HomePage />
      </Router>
    </>
  );
}
export default App;

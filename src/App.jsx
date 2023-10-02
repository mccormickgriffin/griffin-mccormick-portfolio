import { BrowserRouter as Router } from 'react-router-dom';

import 'App.css';
import TopNav from './components/TopNav';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <div>
        <TopNav/>
        <MainPage/>
      </div>
    </Router>
  );
}

export default App;

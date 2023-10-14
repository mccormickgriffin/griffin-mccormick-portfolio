import { BrowserRouter as Router } from 'react-router-dom';

import 'App.scss';
import TopNav from './components/TopNav';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <div className='app'>
        <TopNav/>
        <MainPage/>
      </div>
    </Router>
  );
}

export default App;

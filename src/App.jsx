import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import CollectionPage from './pages/CollectionPage';
import SearchPage from './pages/SearchPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
 

  return (
    <div id="container">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/collection' element={<CollectionPage />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App
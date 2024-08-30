import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollectionPage from './pages/CollectionPage';
import SearchPage from './pages/SearchPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
 

  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='/collection' element={<CollectionPage />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App
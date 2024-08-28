import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollectionPage from './pages/CollectionPage';
import SearchPage from './pages/SearchPage';

export default function App() {
 

  return (
    <div>
      <h1>Library App</h1>
      <Router>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='/collection' element={<CollectionPage />}/>
        </Routes>
      </Router>
    </div>
  )
}


import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CharacterList from '../CharacterList/CharacterList';
import Header from '../Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CharacterList />} />
      </Routes>
    </Router>
  );
}

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import AddCard from './pages/AddCard';
import Upgrade from './pages/Upgrade';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/add" element={<AddCard />} />
            <Route path="/upgrade" element={<Upgrade />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

// PAGES
import HomePage from './pages/HomePage/HomePage';
import BreedsPage from './pages/Breeds/BreedsPage';

function App() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/breeds" component={BreedsPage} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

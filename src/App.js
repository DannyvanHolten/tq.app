import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Search from './components/Search';
import Results from './components/Results';

function App() {
  return (
    <Router>
      <header className="bg-primary color-white py-6">
        <div className="container">
          <img
            width="105px"
            src="https://www.tiqets.com/static/assets/webpack/logo/logo-white-medium.0c98d94780.png" /* no svg available? */
            alt="Tiqets.com"
          />
        </div>
      </header>

      <main className="container py-6">
        <Search />
        <Results />
      </main>
    </Router>
  );
}

export default App;

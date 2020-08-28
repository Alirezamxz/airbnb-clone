import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>

        <Header />

          <Switch>

            <Route path="/">
              <Home />
            </Route>
            
            <Route path="/search">
              <SearchPage />
            </Route>
          
          </Switch>
        
        <Footer />

      </Router>
    </div>
  );
}

export default App;

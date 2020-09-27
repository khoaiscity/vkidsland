import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Partner1 from './Partner1';
import Partner2 from './Partner2';
import Partner3 from './Partner3';
import Products from './Products';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={AboutUs} />
        <Route path='/partner1' component={Partner1} />
        <Route path='/partner2' component={Partner2} />
        <Route path='/partner3' component={Partner3} />
        <Route path='/products' component={Products} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

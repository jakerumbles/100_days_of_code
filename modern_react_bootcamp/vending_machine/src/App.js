import { Route, Switch, NavLink } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Home from './Home';
import Soda from './Soda';
import Chips from './Chips';
import FreshSardines from './FreshSardines';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='App-nav'>
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/soda' >Soda</NavLink>
          <NavLink to='/chips' >Chips</NavLink>
          <NavLink to='/fresh-sardines' >Sardines</NavLink>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/soda' component={Soda} />
          <Route exact path='/chips' component={Chips} />
          <Route exact path='/fresh-sardines' component={FreshSardines} />
        </Switch>
      <VendingMachine />
    </div>
  );
}

export default App;
